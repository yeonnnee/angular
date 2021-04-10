import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoffeeComponent } from './coffee/coffee.component';
import { MainPage } from './main/main.component';


@NgModule({
  declarations: [
    AppComponent,
    MainPage,
    CoffeeComponent
  ],
  imports: [
    BrowserModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
