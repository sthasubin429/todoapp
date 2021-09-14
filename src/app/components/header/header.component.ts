import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  title = 'ToDo App';
  user = 'AK';
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onClick(): void {
    localStorage.removeItem('loggedIn');
    this.router.navigateByUrl('home');
  }
}
