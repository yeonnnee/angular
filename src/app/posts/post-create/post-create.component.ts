import { Component } from "@angular/core";
import { PostsService } from "../posts.service";

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
})

export class PostCreateComponent {
  enteredVal = "";

  
  constructor(public postsService:PostsService){}

  onAddPost() {
   
    this.postsService.addPost("1",this.enteredVal)
  }

} 