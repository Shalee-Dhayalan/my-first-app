import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  products =[

  {id:1, name: 'Refrigerator', available: 'Available', price:'2914', color:'Black', image:'/assets/refrigerator.jpeg'},
    {id:2, name: 'Washing Machine', available: 'Available', price:'3100', color:'Light Ash', image:'/assets/washing machine.jpg'},
    {id:3, name: 'Iphone 12', available: 'Not Available', price:'1855', color:'Blue', image:'/assets/Iphone.jpeg'},
    {id:4, name: 'Hp laoptop', available: 'Available', price:'5900', color:'Black', image:'/assets/Laptop.jpeg'},
    {id:5, name: 'Photo Frame', available: 'Not Available', price:'32', color:'Black', image:'/assets/Photoframe.jpeg'}
  ]
}
