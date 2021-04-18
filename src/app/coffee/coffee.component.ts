import { Component, Input, OnInit} from "@angular/core";
import { CoffeeService } from "../coffee.service";
import { CoffeeList} from "../model/coffee.model";
@Component({
  selector: 'app-coffee',
  templateUrl: './coffee.component.html',
  styleUrls:['./coffee.component.css']
})

export class CoffeeComponent {
  @Input() coffeeList:CoffeeList;

  // constructor(public coffeeService:CoffeeService){}

  // a.pipe()
  // .filter(x => x === '복숭아')
  // .map(x => x = x + '통조림')
  //   .takeLatest()
  //   .combielAltest
  //   .switchmasp
  //   .concatmap.
  // .tap()
  // .subscribe()

  // ngOnInit() {
  //   this.orderList = this.coffeeService.getOrderList();
  //   console.log(this.orderList);
  // }
}