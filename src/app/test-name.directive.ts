import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS, AbstractControl, ValidatorFn, Validator, FormControl } from '@angular/forms';


// validation function
function testNameDirectiveFactory(): ValidatorFn {
  return (c: AbstractControl) => {

    const isValid = c.value === 'TestName';

    if (isValid) {
      return null;
    } else {
      return {
        checkFirstName: {
          valid: false
        }
      };
    }

  };
}

@Directive({
  selector: '[appTestName][ngModel]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: TestNameDirective,
      multi: true
    }
  ]
})
export class TestNameDirective {

  validator: ValidatorFn;

  constructor() {
    this.validator = testNameDirectiveFactory();
  }

  validate(c: FormControl) {
    return this.validator(c);
  }

}
