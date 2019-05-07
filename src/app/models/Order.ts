export interface Order{
    OrderId?: number;
    OwnerId?: number;
    Comments:string;
    CustomerId?:number;
    MenuItemId?:number;
    MenuItemName:string;
    MenuItemPrice:string;
    CustomerName:string;
    CustomerAddress:string;
}
