export interface Products{
    total: number;
    limit: number;
    offset: number;
    results: [
        {
            id: number;
            description: string;
            price: number;
            image: string;
            category: string;
            stock: number;
        }
    ]
}