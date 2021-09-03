import { AbstractControl, ValidationErrors } from '@angular/forms';

export function MatchPassword(
  control: AbstractControl
): ValidationErrors | null {
  let pass = control.get('password').value;
  let confirmPass = control.get('confirmPassword').value;
  return pass === confirmPass ? null : { notSame: true };
}

export function ContainsNumber(
  control: AbstractControl
): ValidationErrors | null {
  const check = /[0-9]/.test(control.value);
  return check ? null : { containsNumber: true };
}
export function ContainsUppercase(
  control: AbstractControl
): ValidationErrors | null {
  const check = /[A-Z]/.test(control.value);
  return check ? null : { containsUppercase: true };
}
export function ContainsLowercase(
  control: AbstractControl
): ValidationErrors | null {
  const check = /[a-z]/.test(control.value);
  return check ? null : { containsLowercase: true };
}
export function ContainsSpecialCharacter(
  control: AbstractControl
): ValidationErrors | null {
  const check = /[^A-Za-z0-9]/.test(control.value);
  return check ? null : { containsSpecialCharacter: true };
}
