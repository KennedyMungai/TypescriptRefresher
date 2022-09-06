export class Strings {
    constructor(public string: string) { }

    get length(): number {
        return this.string.length;
    }

    compare(indexLeft: number, indexRight: number): boolean {
        return (this.string[indexLeft].toLowerCase() > this.string[indexRight].toLowerCase());
    }

    swap(indexLeft: number, indexRight: number): void {
        const letters=[...this.string];
    }
}