"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Numbers = void 0;
class Numbers {
    constructor(number) {
        this.number = number;
    }
    compare(indexLeft, indexRight) {
        return this.number[indexLeft] > this.number[indexRight];
    }
}
exports.Numbers = Numbers;
