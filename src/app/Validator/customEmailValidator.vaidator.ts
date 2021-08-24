import { AbstractControl } from '@angular/forms';

const emailRegex =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

export function customEmailValidator(
  control: AbstractControl
): { [key: string]: any } | null {
  const check = emailRegex.test(control.value);
  return check ? { customEmailCheck: { value: control.value } } : null;
}
