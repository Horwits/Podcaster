export class User {
    id?: string;
    username: string;
    password: string;
    confirmPassword?: string;
    email?: string;
    firstName?: string;
    lastName?: string;
    description?: string;
    subscriptions: Array<string>;
    downloads: Array<Object>;
};
