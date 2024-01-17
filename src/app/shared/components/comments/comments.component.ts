import { Component, OnInit } from '@angular/core';
import { UserComments } from 'src/app/interfaces/user-comments-interface';
import { GetCommentsService } from 'src/app/services/get-comments/get-comments.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  public comments!: UserComments[];

  constructor(private getCommentsService: GetCommentsService) { }


  ngOnInit(): void {
    this.getCommentsService.getComments().subscribe({
      next: (val: UserComments[]) => {
        this.comments = val;
      }
    })
  }
}
