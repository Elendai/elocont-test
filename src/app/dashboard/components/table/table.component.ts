import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {EventsDataSource} from './table-datasource';
import {RestService} from '../../services/rest.service';
import {ICowEvent} from '../../../interfaces';
import {EventTypeEnum} from '../../../enums';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) private paginator: MatPaginator;
  @ViewChild(MatSort) private sort: MatSort;
  public dataSource: EventsDataSource;
  public editing: ICowEvent = null;
  public types: Array<EventTypeEnum> = [
    EventTypeEnum.birth,
    EventTypeEnum.breeding,
    EventTypeEnum.calving,
    EventTypeEnum.changeGroup,
    EventTypeEnum.distress,
    EventTypeEnum.dryOff,
    EventTypeEnum.herdEntry,
    EventTypeEnum.systemHealth,
    EventTypeEnum.systemHeat
  ];

  public displayedColumns = [
    'reportingDateTime',
    'startDateTime',
    'cowId',
    'type',
    'animalId',
    'eventId',
    'lactationNumber',
    'daysInLactation',
    'ageInDays',

    'birthDateCalculated',
    'sire',
    'breedingNumber',
    'isOutOfBreedingWindow',
    'interval',
    'destinationGroupName',
    'calvingEase',
    'daysInPregnancy',
    'oldLactationNumber',
    'newborns',
    'alertType',
    'duration',
    'originalStartDateTime',
    'endDateTime',
    'newGroupName',
    'currentGroupName',
    'cowEntryStatus',
    'healthIndex',
    'endDate',
    'minValueDateTime',
    'heatIndexPeak',

    'actions'
  ];

  constructor(private rest: RestService) {
  }

  public ngOnInit(): void {
    this.dataSource = new EventsDataSource(this.rest);
    this.dataSource.loadEvents('reportingDateTime', 'desc');
  }

  public ngAfterViewInit(): void {
    this.sort.sortChange.subscribe(() => {
      this.dataSource.loadEvents(this.sort.active, this.sort.direction);
      this.editing = null;
    });
  }

  public remove(id: string): void {
    this.dataSource.removeRow(id, this.sort.active, this.sort.direction);
  }

  public edit(item: ICowEvent): void {
    this.editing = Object.assign({}, item);
  }

  public save(): void {
    this.dataSource.saveRow(this.editing, this.sort.active, this.sort.direction);
    this.editing = null;
  }

  public hasProperty(prop: string, obj: object): boolean {
    return obj.hasOwnProperty(prop);
  }
}

