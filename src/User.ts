import { faker } from '@faker-js/faker';

export class User {
	name: string;
	location: {
		lan: number;
		lat: number;
	};
	constructor() {
		this.name = faker.name.firstName();
		this.location = {
			lat: parseFloat(faker.address.latitude()),
			lan: parseFloat(faker.address.longitude())
		};
	}
}
