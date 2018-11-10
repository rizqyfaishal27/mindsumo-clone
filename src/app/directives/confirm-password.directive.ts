import { Directive, OnChanges } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors, ValidatorFn, FormGroup } from '@angular/forms';

export const ConfirmPasswordValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');
  console.log(password && confirmPassword ? {
    confirmPassword: password.value != '' && confirmPassword.value != '' && password.value == confirmPassword.value
  } : null);
  return password && confirmPassword && password.value != '' && confirmPassword.value != ''
     && password.value == confirmPassword.value ? null : {
    confirmPasswordValid: false
  }
};

@Directive({
  selector: '[appConfirmPassword]',
  providers: [{ provide: NG_VALIDATORS, useExisting: ConfirmPasswordDirective, multi: true }]
})
export class ConfirmPasswordDirective implements Validator {

  constructor() { }
  validate(control: AbstractControl): ValidationErrors {
    return ConfirmPasswordValidator(control);
  }
}