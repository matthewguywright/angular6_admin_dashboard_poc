import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'currency',
  template: `<input type="text"
                currencyMask
                class="form-control"
                [formlyAttributes]="field"
                [class.is-invalid]="showError">`,
})
export class CurrencyFieldInputComponent extends FieldType {}
