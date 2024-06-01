export interface UserLogin {
  email: string;
  password: string;
}

export interface User extends UserLogin {
  firstName: string;
  lastName: string;
  age: number;
  rol: string;
  cart: string;
}

export interface dbUser extends User {
  _id: string;
}

export interface UserSession {
  name: string;
  email: string;
  age: number;
  rol: string;
  cart: string;
}

export interface AdminSession {
  email: string;
  rol: string;
}

export interface UserDAO {
  getById(id: string): Promise<dbUser>;
  getByEmail(email: string): Promise<dbUser>;
  create(newUser: User): Promise<dbUser>;
  getByCart(cartId: string): Promise<dbUser>;
}
