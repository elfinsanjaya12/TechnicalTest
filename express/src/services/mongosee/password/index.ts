import bcrypt from 'bcryptjs';

export const PasswordCompare = (password: string, userPassword: string) => {
  return bcrypt.compareSync(password, userPassword);
};
