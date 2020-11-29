import {Injectable} from '@angular/core';
import {HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse, HttpParams} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {delay} from 'rxjs/operators';

import * as events from './events.json';
import {ICowEvent} from '../../interfaces';

@Injectable()
export class HttpEventsInterceptor implements HttpInterceptor {

  private DELAY = 700;
  private STORAGE_KEY = 'saved_state';

  private readonly events;
  private REQUEST_TYPES = [{
    method: 'GET',
    processor: (params: HttpParams, body: any) => {
      const isAsc = params.get('direction') === 'asc';
      const active = params.get('active');
      this.events.result.sort((a, b) => compare(a[active], b[active], isAsc));
      return this.events;
    }
  }, {
    method: 'DELETE',
    processor: (params: HttpParams, body: any) => {
      const id = params.get('id');
      const index = this.events.result.findIndex(el => el.eventId === id);
      if (index !== -1) {
        this.events.result.splice(index, 1);
        this.events.total--;
      }
      this.saveState();
      return this.events;
    }
  }, {
    method: 'POST',
    processor: (params: HttpParams, body: ICowEvent) => {
      const index = this.events.result.findIndex(el => el.eventId === body.eventId);
      if (index !== -1) {
        this.events.result[index] = body;
      }
      this.saveState();
      return this.events;
    }
  }, {
    method: 'PUT',
    processor: (params: HttpParams, body: ICowEvent) => {
      this.saveState();
      return this.events;
    }
  }];

  constructor() {
    const stored = localStorage.getItem(this.STORAGE_KEY);
    // tslint:disable-next-line:no-string-literal
    this.events = stored ? JSON.parse(stored) : events['default'];
    this.events.result.forEach(el => {
      ['startDateTime', 'reportingDateTime', 'endDate', 'endDateTime', 'originalStartDateTime', 'minValueDateTime'].forEach(d => {
        if (el.hasOwnProperty(d) && el[d]) {
          el[d] = new Date(stored ? el[d] : el[d] * 1000);
        }
      });
    });
  }

  public intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    for (const el of this.REQUEST_TYPES) {
      if (el.method === request.method) {
        return of(new HttpResponse({
          status: 200,
          body: el.processor(request.params, request.body)
        })).pipe(
          delay(this.DELAY)
        );
      }
    }
    return next.handle(request);
  }

  private saveState(): void {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.events));
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
