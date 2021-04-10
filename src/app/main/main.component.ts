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

  constructor(public coffeeService: CoffeeService){}

  setQty(e: any) { 
    const val = e.target.value;
    this.coffeeService.setQty(+val);
    // if (this.quantity.length > 0) {
    //   this.coffeeService.setQty(+val);
    // } else {
    //   this.coffeeService.setQty(+val);
    // }
    
  }

  getOrder() {
    this.quantity = this.coffeeService.getQty();
    if (this.quantity.length > 0) {
      this.coffeeStatus = true;
    }
  }
}