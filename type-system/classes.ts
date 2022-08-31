class Employee {
    startShift(): void {
        console.log('Employee start shift')
    }

    endShift():void {
        console.log("The shift has ended")
    }
}


class Mechanic extends Employee {

}


const employee1 = new Employee();
const mechanic1 = new Mechanic();

// employee1.startShift()
// employee1.endShift()

mechanic1.startShift()
mechanic1.endShift()