export interface FMessage {
    readonly id:number;
    date:number;
    content:string;
}

// Helper : Omit Pick Partial Readonly
export type FMessageSent = Omit<FMessage, 'id'> ;