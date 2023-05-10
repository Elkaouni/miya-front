export interface IUser {
  id?: number;
  email?:string;
  password?:string;
  admin:boolean;
  token?: string;
}

export class User implements IUser {
  constructor(public id?: number,
              public email?:string,
              public password?:string,
              public admin:boolean = false,
              public token?: string
  ) {}
}
