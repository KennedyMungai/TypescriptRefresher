interface SortingProps {
    length: number;
    compare(indexLeft:number, indexRight: number): boolean;
    swap(indexLeft:number, indexRight:number):void;
}


export class SortData {
    sort(): void {
        const {length}=this;

        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length-i-1; j++) {
                if (this.compare(j, j+1)) {
                    this.swap(j, j+1);
                }
            }
        }
    }
}