import { AbstractControl } from '@angular/forms';

const emailRegex =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

export function CustomEmailValidator(
  control: AbstractControl
): { [key: string]: any } | null {
  const check = emailRegex.test(control.value);
  return check ? null : { customEmailCheck: { value: control.value } };
}

//Class based Email Validator

// import { Directive } from '@angular/core';
// import { AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';

// @Directive({
//   selector: '[CustomEmailValidator]',
//   providers: [
//     { provide: NG_VALIDATORS, useExisting: CustomEmailValidator, multi: true },
//   ],
// })
// export class CustomEmailValidator {
//   validate(control: AbstractControl): { [key: string]: any } | null {
//     const check = emailRegex.test(control.value);
//     return check ? null : { customEmailCheck: { value: control.value } };
//   }
// }
