import {Component, Input, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {IUser} from '../../../../models/user';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {


  user: IUser;


  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(value => {
      this.user = this.router.getCurrentNavigation().extras.state.user;
    })
  }


  // constructor(private userService: UserService,  private route: ActivatedRoute) {
  //   route.params.subscribe(value => this.userId = value.id)
  //   // this.userService.getUserById(this.userId)
  //   //   .subscribe(value => this.user = value);
  // }
}
