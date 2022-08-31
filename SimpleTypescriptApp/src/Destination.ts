import { faker } from "@faker-js/faker";

class Destination {
    constructor() {

    }
    
    receiver: string
    location: {
        lat: number,
        lon: number
    }
}