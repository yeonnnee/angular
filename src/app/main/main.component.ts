import { Component } from "@angular/core";
import { CoffeeService } from "../coffee.service";
import { CoffeeList, OrderList } from "../model/coffee.model";


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls:['./main.component.css']
})

export class MainPage {
  showOrderForm: boolean = false;
  showModal: boolean = false;
  showCoffee: boolean = false;
 
  coffeeList:Array<CoffeeList> = [];
  orderList: Array<OrderList> = [];
  menu: string;
  inputVal: number;
  qty: number = 0;
  totalPrice: number = 0;

  quantity: Array<number> = [];



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
      this.showOrderForm = true;
      const order = { name: this.menu, price: 25 * +this.inputVal, qty: +this.inputVal}
      this.orderList.push(order);
      this.totalPrice = this.totalPrice + order.price;
      this.qty = this.qty + order.qty;
    } else {
      return;
    }
  }

  orderNow() {
    this.showModal=true;
  }

  getCoffee() {
    this.coffeeList = [];
    let className: string = "coffee";

    this.orderList.forEach(coffee => {
      switch (coffee.name) {
        case '아메리카노':
          className = 'americano'
          break;
        case '바닐라라떼':
          className = 'vanilla'
          break;
        case '커피라떼':
          className = 'latte'
          break;
        case '녹차라떼':
          className = 'greenteaLatte'
          break;
        default:
          className = 'coffee'
          break;
      }
      const item = { name: coffee.name, class: className, qty: coffee.qty }
      for (let i = 0; i < item.qty; i++){
        this.coffeeList.push(item);
      }
    })

  }

  confirmOrder() {
    this.showModal = false;
    this.showOrderForm = false;
    this.showCoffee = true;
    this.getCoffee();
  }

  cancelOrder() {
    this.showModal = false;
    this.showOrderForm = false;
    this.orderList = [];
  }

 


}