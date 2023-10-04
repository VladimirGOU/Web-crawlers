import { UnitOfMeasure } from '@efundamentals/gather-sdk';
export interface StandardUnit {
    measure: UnitOfMeasure;
    factor: number;
}
export declare const convertUnit: (rawUnitMeasure: string) => StandardUnit;
