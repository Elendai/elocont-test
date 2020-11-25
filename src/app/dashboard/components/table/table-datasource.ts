import {CollectionViewer, DataSource} from '@angular/cdk/collections';
import {finalize} from 'rxjs/operators';
import {Observable, BehaviorSubject} from 'rxjs';

import {ICowEvent} from '../../../interfaces';
import {RestService} from '../../services/rest.service';

export class EventsDataSource implements DataSource<ICowEvent> {

  private eventsSubject = new BehaviorSubject<Array<ICowEvent>>([]);
  private loadingSubject = new BehaviorSubject<boolean>(false);

  public loading$ = this.loadingSubject.asObservable();
  public total = 0;

  constructor(private rest: RestService) {
  }

  public connect(collectionViewer: CollectionViewer): Observable<Array<ICowEvent>> {
    return this.eventsSubject.asObservable();
  }

  public disconnect(collectionViewer: CollectionViewer): void {
    this.eventsSubject.complete();
    this.loadingSubject.complete();
  }

  public loadEvents(active: string, direction: string): void {

    this.loadingSubject.next(true);

    this.rest.getList(active, direction).pipe(
      finalize(() => this.loadingSubject.next(false))
    )
      .subscribe(r => {
        this.total = r.total;
        this.eventsSubject.next(r.result);
      });
  }

  public removeRow(id: string, active: string, direction: string): void {
    this.loadingSubject.next(true);

    this.rest.removeRow(id).subscribe(() => this.loadEvents(active, direction));
  }

  public saveRow(item: ICowEvent, active: string, direction: string): void {
    this.loadingSubject.next(true);

    this.rest.saveRow(item).subscribe(() => this.loadEvents(active, direction));
  }
}
