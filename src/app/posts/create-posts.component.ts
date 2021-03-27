import { Component } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './create-posts.component.html',
})
export class PostCreateComponent {
  newPosts = 'hello';
  handleClick(postInput: HTMLTextAreaElement) {
    const value = postInput.value;
    this.newPosts = 'bye';
  }
}
