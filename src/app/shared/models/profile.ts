export interface IProfile {
    id: number;
    name: string;
    lastName: string;
    email: string;
    password: string;
    age: number;
    phone: number;
    rol: string;
    account: any;
    sessions: any[];
    experiences: any[];
    schedules: any[];
    complaints: any[];
    subscriptions: any[];
}


export interface IListProfile{
    profile?:IProfile[]
}