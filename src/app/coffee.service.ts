// import { Injectable } from "@angular/core";
// import { OrderList } from "./model/coffee.model";

// // @Injectable({ providedIn: 'root' })

// export class CoffeeService {
//   quantity: Array<number> = [];
//   orderList: Array<OrderList> = [];

//   setQty(val:number) { 
    
//     if (val > 0 && this.quantity.length < val) {
//       for (let i = 0; i < val; i++) {
//         if (!this.quantity.includes(i)){
//           this.quantity.push(i);
//         }
//       }
//     } else if (val > 0 && this.quantity.length > val) {
//       const lastIndex = this.quantity[this.quantity.length - 1];
//       this.quantity.splice(val,lastIndex);
//     }
  
//   }

//   // setItem(item: OrderList) {
//   //   this.orderList.push(item);
//   // }


//   getQty() {
//     return this.quantity;
//   }

//   getOrderList() {
//     return this.orderList;
//   }

// }