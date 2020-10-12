import { Component} from '@angular/core';
import {IUser} from '../../../../models/user';
import {UserService} from '../../services/user.service';


@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})



export class AllUsersComponent {

  usersList: IUser[] = [];

  constructor(private userService: UserService) {
    this.userService.getUsers().subscribe(value => this.usersList = value);
  }


}
