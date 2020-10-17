import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@amysshop.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Ebou Touray',
    email: 'ebou@amysshop.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Amy Touray',
    email: 'amy@amysshop.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;
