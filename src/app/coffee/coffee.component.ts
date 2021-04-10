import { Component, OnInit} from "@angular/core";
import { CoffeeService } from "../coffee.service";

@Component({
  selector: 'app-coffee',
  templateUrl: './coffee.component.html',
  styleUrls:['./coffee.component.css']
})

export class CoffeeComponent implements OnInit {

  quantity: Array<number>= [];
  constructor(public coffeeService:CoffeeService){}



  ngOnInit() {
    this.quantity = this.coffeeService.getQty();
  }
}