import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  title = 'ToDo App';

  user = JSON.parse(localStorage.getItem('loginData'));
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onClick(): void {
    localStorage.removeItem('loggedIn');
    localStorage.removeItem('loginData');
    this.router.navigateByUrl('home');
  }
}
