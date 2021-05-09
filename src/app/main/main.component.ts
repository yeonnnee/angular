import { Component } from "@angular/core";
import { FormControl,FormBuilder,Validators } from '@angular/forms';
import { CoffeeList, OrderList } from "../model/coffee.model";


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls:['./main.component.css']
})

export class MainPage {

  /*
  폼 컨트롤의 초기값만 지정한다면 배열을 사용하지 않아도 됩니다. 
  하지만 폼 컨트롤에 유효성 검사기를 지정하려면 프로퍼티 값에 배열을 사용해야 합니다.
  이 때 동기 유효성 검사기는 두번째 인자로, 
  비동기 유효성 검사기는 세번째 인자로 지정합니다.
  */
  orderForm = this.fb.group({
    name: ['',Validators.required],
    menu: ['',Validators.required],
    qty: ['',Validators.required],
  });

  // coffeeQtyControl = new FormControl('');


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

  constructor( private fb:FormBuilder){}

  setMenu(e: any) {
    const menu = e.target.value;
    if (menu !== "no") {
      this.menu = e.target.value;
    }
  }

  setQty(e: any) { 
    this.inputVal = e.target.value;
  }


  get name() { return this.orderForm.get('name'); }

 
  addCart() {

    // this.coffeeQtyControl.setValue(12);
    console.log(this.orderForm.value);
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