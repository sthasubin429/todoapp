import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private animationSubject = new BehaviorSubject<string>('show');
  currentAnimation = this.animationSubject.asObservable();
  constructor() {}

  changeAnimationSubject(state: string) {
    this.animationSubject.next(state);
  }
}
