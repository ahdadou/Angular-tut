import { Product } from './product';

export class CartItem {

    id:Number;
    productId:Number;
    ProductName:String;
    qty: number;
    price:Number;

    constructor(
        id:Number,price:Number,
        name:String,productid:Number,qty=1){
        this.id=id;
        this.qty=qty;
        this.price=price;
        this.ProductName=name;
        this.productId=productid;

    }
}
