import { SortData } from "./SortData";



export class Strings extends SortData {
    constructor(public string: string) { }

    get length(): number {
        return this.string.length;
    }

    compare(indexLeft: number, indexRight: number): boolean {
        return (this.string[indexLeft].toLowerCase() > this.string[indexRight].toLowerCase());
    }

    swap(indexLeft: number, indexRight: number): void {
        const letters=[...this.string];

        const leftArg=letters[indexLeft];
        letters[indexLeft]=letters[indexRight];
        letters[indexRight]=leftArg;

        this.string=letters.join('');
    }
}