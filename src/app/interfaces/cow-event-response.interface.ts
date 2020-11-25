import {ICowEvent} from './cow-event.interface';

export interface ICowEventResponse {
  offset: number;
  limit: number;
  total: number;
  result: Array<ICowEvent>;
}
