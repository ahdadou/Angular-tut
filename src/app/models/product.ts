export class Product {

    id:Number;
    name:String;
    description:String;
    price:Number;
    imageUrl:String;


    constructor(id,name,description='',price=0,image="https://www.rubiks.com/media/catalog/product/cache/9c57e2fe71f8a58f6afba681a0a15dd4/r/u/rubiks-light-cube-solved.jpg"){
        this.id=id,
        this.name=name,
        this.description=description;
        this.price=price;
        this.imageUrl=image;
        

    }

}
