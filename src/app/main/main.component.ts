import { Component } from "@angular/core";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls:['./main.component.css']
})

export class MainPage {
  quantity: number;
  coffeeStatus: boolean=false;
  
  setQty(e: any) { 
    const val = e.target.value;
    if (val > 0) {
      this.quantity = +val;
    }
  }

  getOrder() {
    if (this.quantity > 0) {
      this.coffeeStatus = true;
    }
  }
}