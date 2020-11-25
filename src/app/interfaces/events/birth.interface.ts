import {IAbstractReport} from './abstract-event.interface';
import {EventTypeEnum} from '../../enums';

export interface IBirth extends IAbstractReport {
  type: EventTypeEnum.birth;
  birthDateCalculated: boolean;
}
