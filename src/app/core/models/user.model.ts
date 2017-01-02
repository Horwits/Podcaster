export class User {
    id?: string;
    username: string;
    password: string;
    confirmPassword?: string;
    email?: string;
    firstName?: string;
    lastName?: string;
    description?: string;
    subscription: array<string>;
    downloads: array<Object>
};
