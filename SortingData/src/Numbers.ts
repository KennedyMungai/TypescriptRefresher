export class Numbers {
    constructor(public number:number[]) {}

    compare(indexLeft:number, indexRight:number): boolean {
        return this.number[indexLeft] > this.number[indexRight];
    }

    swap(indexLeft:number, indexRight:number) {
        
    }
}