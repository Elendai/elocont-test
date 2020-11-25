import {IAbstractReport} from './abstract-event.interface';
import {EventTypeEnum} from '../../enums';

export interface IBreeding extends IAbstractReport {
  type: EventTypeEnum.breeding;
  sire: number; // unknown type
  breedingNumber: number;
  isOutOfBreedingWindow: boolean;
  interval: number;
}
