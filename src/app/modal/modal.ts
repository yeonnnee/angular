import { Component, Output, EventEmitter } from "@angular/core";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.html',
  styleUrls:['./modal.css']
})

export class Modal {
  @Output() confirmOrder:EventEmitter<any> = new EventEmitter();
  @Output() cancelOrder:EventEmitter<any> = new EventEmitter();

  handleOrder() {
    this.confirmOrder.emit();
  }

  handleCancel() {
    this.cancelOrder.emit();
  }
}