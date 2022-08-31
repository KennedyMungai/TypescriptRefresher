import { faker } from "@faker-js/faker";

class Destination {
    constructor() {
        this.receiver=faker.name.firstName()
        this.location={
            lat: +faker.address.latitude(),
            lon: +faker.address.longitude()
        }
    }
    
    receiver: string
    location: {
        lat: number,
        lon: number
    }
}