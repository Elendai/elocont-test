import {IAbstractReport} from './abstract-event.interface';
import {EventTypeEnum} from '../../enums';

export interface ICalving extends IAbstractReport {
  type: EventTypeEnum.calving;
  destinationGroup: number;
  destinationGroupName: string;
  calvingEase: number; // ? unknown type
  daysInPregnancy: number;
  oldLactationNumber: number;
  newborns: number;
}
