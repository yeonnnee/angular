import { Injectable } from "@angular/core";

// @Injectable({ providedIn: 'root' })

export class CoffeeService {
  quantity: Array<number> = [];

  setQty(val:number) { 
    
    if (val > 0) {
      for (let i = 0; i < val; i++) {
        if (!this.quantity.includes(i)){
          this.quantity.push(i);
        }
      }
    }
  
  }


  getQty() {
    return this.quantity;
  }
}