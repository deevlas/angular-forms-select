import {Component, OnInit} from '@angular/core';
import {NgModel} from '@angular/forms';
import {Router} from '@angular/router';
import {IUser} from '../../models/user';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  username = 'okten';
  users: Partial <IUser>[] = [{
    id: 1,
    name: 'aaa'
  }, {
    id: 2,
    name: 'pppp'
  }];
  myModel = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  checkInputState(us: NgModel): void {
    const u: Partial<IUser> = JSON.parse(us.value);
    // console.log(u.name);
    this.router.navigate(['users', u.id], {state: {user: u}});
  }
}
