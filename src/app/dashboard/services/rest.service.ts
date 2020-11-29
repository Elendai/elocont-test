import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

import {ICowEvent, ICowEventResponse} from '../../interfaces';

@Injectable()
export class RestService {

  constructor(private http: HttpClient) {
  }

  public getList(active: string, direction: string): Observable<ICowEventResponse> {
    return this.http.get<ICowEventResponse>('/events', {
      params: new HttpParams({
        fromObject: {active, direction}
      })
    });
  }

  public removeRow(id: string): Observable<null> {
    return this.http.delete<null>('/events/', {
      params: new HttpParams({
        fromObject: {id}
      })
    });
  }

  public saveRow(item: ICowEvent): Observable<null> {
    return this.http.post<null>('/events/', item);
  }

  public createRow(item: ICowEvent): Observable<null> {
    return this.http.put<null>('/events/', item);
  }
}
