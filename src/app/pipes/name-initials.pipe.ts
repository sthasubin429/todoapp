import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nameInitials',
})
export class NameInitialsPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): string {
    let nameArr = value.split(' ');
    let initials = nameArr.shift().charAt(0) + nameArr.pop().charAt(0);
    return initials.toLocaleUpperCase();
  }
}
