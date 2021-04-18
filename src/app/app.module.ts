import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoffeeService } from './coffee.service';
import { CoffeeComponent } from './coffee/coffee.component';
import { MainPage } from './main/main.component';
import { Modal } from './modal/modal';


@NgModule({
  declarations: [
    AppComponent,
    MainPage,
    CoffeeComponent,
    Modal
  ],
  imports: [
    BrowserModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [CoffeeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
