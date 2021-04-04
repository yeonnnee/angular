import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PostCreateComponent } from "./posts/post-create/post-create.component";
import { PostListComponent } from './posts/post-list/post-list.component';

//  this file defines the features our angular app has
// applications split up in modules, in this case in one module, and that module defines the building blocks of application
@NgModule({
  declarations: [
    AppComponent,
    PostCreateComponent,
    HeaderComponent,
    PostListComponent
    //declare app component, so now angular is aware of the app component,
    // allow us to use that component selector in other angular components, not in index.html file
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
  // typically only have one component in there, because we only have one root component in a typical angular app
  // this array tells angular that it should search the index.html file, which is loaded or in general the page in
  //which the angualr app is loaded for the app component identified by its selector
})
export class AppModule {}
