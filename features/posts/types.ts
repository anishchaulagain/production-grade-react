export interface PostsResponse {
    "total" : number;
    "limit": number;
    "offset": number;
    "results": Post[];
}

export interface Post{
    "id": number;
    "userId": number;
    "title": string;
    "tags" : number[];
    "category": string,
    "createdAt": string;
}

export interface CreatePost{
    "userId": number;
    "title": string;
    "body": string;
    "tags": string[];
    "category": string;
}
