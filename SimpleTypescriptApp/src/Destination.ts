import { faker } from "@faker-js/faker";

class Destination {
    constructor() {
        this.receiver=faker.name.firstName()
    }
    
    receiver: string
    location: {
        lat: number,
        lon: number
    }
}