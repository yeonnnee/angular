import { Component, Input } from "@angular/core";
import { CoffeeService } from "../coffee.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls:['./main.component.css']
})

export class MainPage {
  coffeeStatus: boolean=false;
  quantity: Array<number> = [];
  inputVal: number;

  constructor(public coffeeService: CoffeeService){}

  setQty(e: any) { 
    this.inputVal = e.target.value;
  }

  getOrder() {
    this.coffeeService.setQty(+this.inputVal);
    this.quantity = this.coffeeService.getQty();
    if (this.quantity.length > 0) {
      this.coffeeStatus = true;
    }
  }
}