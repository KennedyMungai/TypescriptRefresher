import { faker } from "@faker-js/faker";


export class Cargo {
    trackingId: string
    location: {
        lat: number,
        lon: number
    }
}