import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const loggedIn = localStorage.getItem('loggedIn');

    if (loggedIn === undefined) {
      localStorage.setItem('loggedIn', 'False');
      if (confirm('Please Login to Continue')) {
        this.router.navigateByUrl('login');
      }
      return false;
    } else if (loggedIn === 'True') {
      return true;
    } else {
      if (confirm('Please Login to Continue')) {
        this.router.navigateByUrl('login');
      }
      return false;
    }
  }
}
