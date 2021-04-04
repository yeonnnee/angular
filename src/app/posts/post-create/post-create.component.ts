import { Component, EventEmitter,Output } from "@angular/core";

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
})

export class PostCreateComponent {
  enteredVal = "";
  @Output() postCreated = new EventEmitter();
  
  onAddPost() {
    const post = { title: "1", content: this.enteredVal };
    this.postCreated.emit(post);
  }

} 