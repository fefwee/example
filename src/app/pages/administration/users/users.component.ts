import { Component, OnInit } from '@angular/core';
import { User, UsersArray } from 'src/app/interfaces/users-inteface';
import { GetUsersService } from 'src/app/services/get-users/get-users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  public tableUsersData!: User[];

  constructor(private usersService: GetUsersService) { }


  ngOnInit(): void {
    this.usersService.getUsers().subscribe({
      next: (val:User[]) => {
        console.log(val)
        this.tableUsersData = val;
      }
    })
  }
}
