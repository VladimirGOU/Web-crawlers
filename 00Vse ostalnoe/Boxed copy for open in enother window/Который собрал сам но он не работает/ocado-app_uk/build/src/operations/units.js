"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertUnit = void 0;
const gather_sdk_1 = require("@efundamentals/gather-sdk");
const DEFAULT_UNIT = {
    measure: gather_sdk_1.UnitOfMeasure.UNIT,
    factor: 1,
};
const unitMap = {
    // weight
    OZ: { measure: gather_sdk_1.UnitOfMeasure.OZ, factor: 1 },
    LB: { measure: gather_sdk_1.UnitOfMeasure.OZ, factor: 16 },
    KG: { measure: gather_sdk_1.UnitOfMeasure.KG, factor: 1 },
    G: { measure: gather_sdk_1.UnitOfMeasure.KG, factor: 0.001 },
    // volume
    FL_OZ: { measure: gather_sdk_1.UnitOfMeasure.FL_OZ, factor: 1 },
    GALLON: { measure: gather_sdk_1.UnitOfMeasure.FL_OZ, factor: 128 },
    L: { measure: gather_sdk_1.UnitOfMeasure.L, factor: 1 },
    ML: { measure: gather_sdk_1.UnitOfMeasure.L, factor: 0.001 },
};
const convertUnit = (rawUnitMeasure) => {
    return unitMap[rawUnitMeasure.toUpperCase()] || DEFAULT_UNIT;
};
exports.convertUnit = convertUnit;
//# sourceMappingURL=units.js.map