import {IBirth} from './events/birth.interface';
import {IBreeding} from './events/breeding.interface';
import {ICalving} from './events/calving.interface';
import {IChangeGroup} from './events/change-group.interface';
import {IDistress} from './events/distress.interface';
import {IDryOff} from './events/dry-off.interface';
import {IHerdEntry} from './events/herd-entry.interface';
import {ISystemHealth} from './events/system-health.interface';
import {ISystemHeat} from './events/system-heat.interface';

export type ICowEvent = IBirth | IBreeding | ICalving | IChangeGroup | IDistress | IDryOff | IHerdEntry | ISystemHealth | ISystemHeat;
