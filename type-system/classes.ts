class Employee {
    startShift(): void {
        console.log('Employee start shift')
    }

    endShift():void {
        console.log("The shift has ended")
    }
}


class Mechanic extends Employee {
    startShift(): void {
        console.log("Mechanic has started the shift")
    }

    endShift(): void {
        console.log("Mechanic has ended the shift")
    }
}


const employee1 = new Employee();
const mechanic1 = new Mechanic();

// employee1.startShift()
// employee1.endShift()

mechanic1.startShift()
mechanic1.endShift()