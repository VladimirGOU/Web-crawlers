import { UnitOfMeasure } from '@efundamentals/gather-sdk';

export interface StandardUnit {
  measure: UnitOfMeasure;
  factor: number;
}

const DEFAULT_UNIT: StandardUnit = {
  measure: UnitOfMeasure.UNIT,
  factor: 1,
};

const unitMap: Record<string, StandardUnit> = {
  // weight
  OZ: { measure: UnitOfMeasure.OZ, factor: 1 },
  LB: { measure: UnitOfMeasure.OZ, factor: 16 },
  KG: { measure: UnitOfMeasure.KG, factor: 1 },
  G: { measure: UnitOfMeasure.KG, factor: 0.001 },
  // volume
  FL_OZ: { measure: UnitOfMeasure.FL_OZ, factor: 1 },
  GALLON: { measure: UnitOfMeasure.FL_OZ, factor: 128 },
  L: { measure: UnitOfMeasure.L, factor: 1 },
  ML: { measure: UnitOfMeasure.L, factor: 0.001 },
};

export const convertUnit = (rawUnitMeasure: string) => {
  return unitMap[rawUnitMeasure.toUpperCase()] || DEFAULT_UNIT;
};
