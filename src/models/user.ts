export interface User {
  token: string;
  name: string;
  paternalSurname: string;
  maternalSurname: string;
  phone: string;
  email: string;
}

export interface UserCredentials {
  email: string;
  password: string;
}

export interface IResponseSignUp {
  token: string;
}

export interface IResponseGetUser {
  name: string;
  paternalSurname: string;
  maternalSurname: string;
  phone: string;
  email: string;
}
