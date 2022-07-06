import { faker } from '@faker-js/faker';

export class Company {
	companyName: string;
	catchPhrase: string;
	location: {
		lan: number;
		lat: number;
	};
	constructor() {
		this.companyName = faker.company.companyName();
		this.catchPhrase = faker.company.catchPhrase();
		this.location = {
			lan: parseFloat(faker.address.longitude()),
			lat: parseFloat(faker.address.latitude())
		};
	}
}
