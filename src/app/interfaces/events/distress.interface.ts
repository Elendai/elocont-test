import {IAbstractReport} from './abstract-event.interface';
import {AlertTypeEnum, EventTypeEnum} from '../../enums';

export interface IDistress extends IAbstractReport {
  type: EventTypeEnum.distress;
  alertType: AlertTypeEnum.preCalving;
  duration: number;
  originalStartDateTime: number;
  endDateTime: number;
  daysInPregnancy: number;
}
