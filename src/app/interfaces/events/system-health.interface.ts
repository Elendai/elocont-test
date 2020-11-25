import {IAbstractReport} from './abstract-event.interface';
import {EventTypeEnum} from '../../enums';

export interface ISystemHealth extends IAbstractReport {
  type: EventTypeEnum.systemHealth;
  healthIndex: number;
  endDate: number; // timestamp
  minValueDateTime: number; // timestamp
}
