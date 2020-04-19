import UserModel from '@/models/UserModel';
import TreeNodeModel from '@/models/TreeNodeModel';

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

export const StaticUsersRoles: TreeNodeModel[] = [
  {
    id: 5,
    parentId: 0,
    name: 'Management',
    isApprove: true,
  },
  {
    id: 2,
    parentId: 3,
    name: 'Complete Removal',
    isApprove: true,
  },
  {
    id: 4,
    parentId: 5,
    name: 'Modify',
    isApprove: true,
  },
  {
    id: 3,
    parentId: 4,
    name: 'Removal',
    isApprove: false,
  },
  {
    id: 113,
    name: 'Preview',
    isApprove: false,
  },
  {
    id: 112,
    parentId: 4,
    name: 'Edit',
    isApprove: true,
  },
  {
    id: 110,
    parentId: 4,
    name: 'Add',
    isApprove: true,
  },
];
