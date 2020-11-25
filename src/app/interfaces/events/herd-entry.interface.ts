import {IAbstractReport} from './abstract-event.interface';
import {CowStatusEnum, EventTypeEnum} from '../../enums';

export interface IHerdEntry extends IAbstractReport {
  type: EventTypeEnum.herdEntry;
  destinationGroup: number;
  destinationGroupName: string;
  cowEntryStatus: CowStatusEnum.heifer;
}
