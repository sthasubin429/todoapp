import { AbstractControl, ValidationErrors } from '@angular/forms';

export function PhoneValidator(
  control: AbstractControl
): ValidationErrors | null {
  let phone = control.get('phone').value;

  if (phone) {
    return phone.number.length === 10 ? null : { phoneValid: true };
  } else {
    return null;
  }
}
