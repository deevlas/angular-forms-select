import { Component, OnInit } from '@angular/core';
import {CommentService} from '../services/comment.service';
import {ActivatedRoute} from '@angular/router';
import {IComment} from '../../../models/comment';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  postID: string;
  postComments: IComment[];

  constructor(private commentService: CommentService, private route: ActivatedRoute) {
    this.postID = route.snapshot.params.id;
    this.commentService.getCommentsByPostId(this.postID).subscribe(value => this.postComments = value)
  }

  ngOnInit(): void {
  }

}
