import { Component, Input } from "@angular/core";
import { CoffeeService } from "../coffee.service";
import { OrderList } from "../model/coffee.model";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls:['./main.component.css']
})

export class MainPage {
  coffeeStatus: boolean = false;
  openOrderForm: boolean = false;
  orderList: Array<OrderList> = [];
  quantity: Array<number> = [];
  qty: number = 0;
  menu: string;
  inputVal: number;
  totalPrice: number = 0;

  constructor(public coffeeService: CoffeeService){}

  setMenu(e: any) {
    const menu = e.target.value;
    if (menu !== "no") {
      this.menu = e.target.value;
    }
  }

  setQty(e: any) { 
    this.inputVal = e.target.value;
  }

  addCart() {
    if (this.menu && this.inputVal) {
      this.openOrderForm = true;
      const order = { name: this.menu, price: 25 * +this.inputVal, qty: +this.inputVal }
      this.orderList.push(order);
      this.totalPrice = this.totalPrice + order.price;
      this.qty = this.qty + order.qty;
    } else {
      return;
    }
  }

  getOrder() {
    this.orderList = this.coffeeService.getOrderList();
  }

  getCoffee() {
    this.coffeeService.setQty(+this.qty);
    this.quantity = this.coffeeService.getQty();
    if (this.quantity.length > 0) {
      this.coffeeStatus = true;
      this.openOrderForm = false;
    }
  }
}