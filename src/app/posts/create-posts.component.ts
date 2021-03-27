import { Component } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './create-posts.component.html',
})
export class PostCreateComponent {
  handleClick() {
    console.log('hello');
  }
}
