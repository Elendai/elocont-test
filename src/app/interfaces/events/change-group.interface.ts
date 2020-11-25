import {IAbstractReport} from './abstract-event.interface';
import {EventTypeEnum} from '../../enums';

export interface IChangeGroup extends IAbstractReport {
  type: EventTypeEnum.changeGroup;
  newGroupId: 46;
  newGroupName: string;
  currentGroupId: number;
  currentGroupName: string;
}
