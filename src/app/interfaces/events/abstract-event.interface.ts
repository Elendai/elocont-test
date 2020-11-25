import {EventTypeEnum} from '../../enums';

export interface IAbstractReport {
    type: EventTypeEnum;
    cowId: number;
    animalId: string;
    eventId: number;
    deletable: boolean;
    lactationNumber: number;
    daysInLactation: number;
    ageInDays: number;
    startDateTime: number; // timestamp
    reportingDateTime: number; // timestamp
}

