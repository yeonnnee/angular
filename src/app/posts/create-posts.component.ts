import { Component } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './create-posts.component.html',
})
export class PostCreateComponent {
  newPosts = 'hello';
  handleClick() {
    this.newPosts = 'bye';
  }
}
