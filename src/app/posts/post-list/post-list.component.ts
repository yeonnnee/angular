import { Component, OnInit } from "@angular/core";
import { PostsService } from "../posts.service";

@Component({
  selector: 'app-post-list',
  templateUrl:'./post-list.component.html'
})

export class PostListComponent implements OnInit {
  // posts = [
  //   { title: "1", content: "hello" },
  //   { title: "2", content: "hello" },
  //   { title: "3", content: "hello" }
  // ];
 posts = [];

  // postsService: PostsService;


  // constructor(postsService: PostsService) {
  //   this.postsService = postsService;
  // }

  // 위의 주석 안의 코드는 아래와 같이 쓰일 수 있음

  constructor(public postsService: PostsService) {
   
  }

  ngOnInit() {
    this.posts = this.postsService.getPosts();
  }
}