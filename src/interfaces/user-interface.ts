export interface LoginUser {
    email: string;
    password: string;
}

export interface UserInfo {
    id: string;
    email: string;
    userName: string;
    hashPassword: string;
    isLogin: boolean;
}

export interface RegisterUser extends LoginUser {
    userName: string;
    confirmPassword: string;
}

