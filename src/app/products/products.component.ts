import { Component } from '@angular/core';

interface Product{
  id: number;
  name: string;
  price: number;
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products: Product[] = [
    {id:1 , name:"Dell Laptop", price:900},
    {id:2 , name:"Sony Camera", price:1500},
    {id:3 , name:"Asus Laptop", price:1250},
    {id:4 , name:"Samsung Mobile", price:1450},
    {id:5 , name:"IPhone 13", price:1860},
    {id:6 , name:"Ipad", price:1350},
    {id:7 , name:"Dell ThinkPad", price:5640},
    {id:8 , name:"Lenovo IdeaPad", price:1120},
    {id:9 , name:"Redmi TV", price:4323},
    {id:10 , name:"Bajaj Cooler", price:1050},
    {id:11 , name:"LG TV", price:2050},
    {id:12 , name:"Sony Laptop", price:950},
  ]

}
