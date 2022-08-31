class Employee {
    age:number=41

    public startShift(): void {
        console.log('Employee start shift')
    }

    public endShift():void {
        console.log("The shift has ended")
    }
}


class Mechanic extends Employee {
    public startShift(): void {
        console.log("Mechanic has started the shift")
    }

    public endShift(): void {
        console.log("Mechanic has ended the shift")
    }

    public gotoWork():void {
        this.startShift()
    }
}


const employee1 = new Employee();
const mechanic1 = new Mechanic();

// employee1.startShift()
// employee1.endShift()

// mechanic1.gotoWork()
// mechanic1.endShift()
console.log(mechanic1.age)