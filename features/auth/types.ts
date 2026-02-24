export interface LoginResponse{
    accessToken: string;
    refreshToken: string;
    user: User[];
}

export interface User{
    "_id": string;
    "name": string;
    "email": string;
    "password": string;
    "role": string;
    "isVerified": boolean;
    "createdAt": string;
    "updatedAt": string;
    "__v": number;
}

export interface RegisterResponse{
    "message": string
}