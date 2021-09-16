import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private animationSubject = new BehaviorSubject<boolean>(false);
  currentAnimation = this.animationSubject.asObservable();
  constructor() {}

  changeAnimationSubject() {
    this.animationSubject.next(!this.animationSubject.value);
  }
}
