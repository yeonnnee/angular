import { Component, Input } from "@angular/core";

@Component({
  selector: 'app-post-list',
  templateUrl:'./post-list.component.html'
})

export class PostListComponent {
  // posts = [
  //   { title: "1", content: "hello" },
  //   { title: "2", content: "hello" },
  //   { title: "3", content: "hello" }
  // ];
  @Input() posts = [];

}