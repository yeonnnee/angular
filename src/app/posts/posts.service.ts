import { Injectable } from "@angular/core";
import { Post } from "./post.model";



@Injectable({providedIn:'root'})

export class PostsService {
  // private property  = 밖에서 수정 안된다는 뜻
  private posts:Post[] = [];

  getPosts() {
    return this.posts;
  }

  addPost(title:string, content:string) {
    const post = { title: title, content: content };
    this.posts.push(post);
  }

}