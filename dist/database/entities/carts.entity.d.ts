declare enum StandardSetType {
    OPEN = "OPEN",
    ORDERED = "ORDERED"
}
export declare class Carts {
    id: string;
    user_id: string;
    created_at: Date;
    updated_at: Date;
    status: StandardSetType;
}
export {};
