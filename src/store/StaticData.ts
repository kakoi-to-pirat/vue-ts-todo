import UserModel from '@/models/UserModel';

const faker = require('faker'); // eslint-disable-line

const generateUser = (id: number): UserModel => {
  const userData = {
    id,
    name: `${faker.name.firstName()} ${faker.name.lastName()}`,
    username: `${faker.name.title()}`,
    email: `${faker.internet.email()}`,
    address: {
      street: `${faker.address.streetName()}`,
      suite: `${faker.address.streetAddress()}`,
      city: `${faker.address.city()}`,
      zipcode: `${faker.address.zipCode()}`,
      geo: {
        lat: `${faker.address.latitude()}`,
        lng: `${faker.address.longitude()}`,
      },
    },
    phone: `${faker.phone.phoneNumber()}`,
    website: `${faker.internet.url()}`,
    company: {
      name: `${faker.company.companyName()}`,
      catchPhrase: `${faker.company.catchPhrase()}`,
      bs: `${faker.company.bs()}`,
    },
  };
  return userData;
};

const generateUsersData = (): UserModel[] => {
  const data = [];
  for (let i = 0; i < 10; i++) {
    const user = generateUser(i);
    data.push(user);
  }
  return data as UserModel[];
};

export const StaticUsers: UserModel[] = generateUsersData();
