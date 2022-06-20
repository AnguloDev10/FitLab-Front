export interface IAccount {
  id: number;
  userName: string;
  email: string;
  password: string;
  profileId: number;
  profile?: any;
}

export interface IRootObject {
  id: number;
  name: string;
  lastName: string;
  email: string;
  password: string;
  age: number;
  phone: number;
  rol: string;
  account: IAccount;
  sessions: any[];
  experiences: any[];
  schedules: any[];
  complaints: any[];
  subscriptions: any[];
}
