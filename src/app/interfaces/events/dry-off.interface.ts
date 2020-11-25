import {IAbstractReport} from './abstract-event.interface';
import {EventTypeEnum} from '../../enums';

export interface IDryOff extends IAbstractReport {
  type: EventTypeEnum.dryOff;
  destinationGroup: number;
  destinationGroupName: string;
  daysInPregnancy: number;
}
