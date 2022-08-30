const client = {
    id: '1234',
    age: 25,
    BMI: 1.5,
    condition: {
        mass: 80,
        height: 185
    },
    setBMI(mass: number, height: number): void {
        this.BMI = mass/(height * height)
    }
}


const {id}: {id: string} = client