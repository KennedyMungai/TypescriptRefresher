import { faker } from "@faker-js/faker";


export class Cargo {
    constructor() {
        this.trackingId=faker.datatype.uuid()
        this.location={
            lat: +faker.address.latitude(),
            lon: +faker.address.longitude()
        }
    }

    trackingId: string
    location: {
        lat: number,
        lon: number
    }
}