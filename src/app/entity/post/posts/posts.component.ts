import {Component, Input, OnInit} from '@angular/core';
import {PostService} from '../services/post.service';
import {ActivatedRoute} from '@angular/router';
import {IPost} from '../../../models/post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  userId: string;
  userPosts: IPost[] = [];


  constructor(private postService: PostService, private route: ActivatedRoute) {
    this.userId = route.snapshot.params.id;
    this.postService.getPostByUserId(this.userId).subscribe(value =>
      this.userPosts = value
    )
  }

  ngOnInit(): void {
  }

}
