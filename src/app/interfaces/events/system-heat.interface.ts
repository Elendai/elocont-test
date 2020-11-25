import {IAbstractReport} from './abstract-event.interface';
import {EventTypeEnum} from '../../enums';

export interface ISystemHeat extends IAbstractReport {
  type: EventTypeEnum.systemHeat;
  heatIndexPeak: number;
}
