export interface Record {
    id: string;
    date:string|number|Date;
    text:string;
    amount: number;
    userId: string;
    createdAt: Date;
}