import { Component, OnInit } from "@angular/core";
import { CoffeeService } from "../coffee.service";

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls:['./order-list.component.css']
})

export class OrderList implements OnInit {
  constructor(public coffeeService:CoffeeService) {}

  ngOnInit() {
  
  }
}