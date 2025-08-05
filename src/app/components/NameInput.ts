import { Component, forwardRef } from '@angular/core';
import { BaseValueAccessor } from '../lib/BaseValueAccessor';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'NameInput',
  template: '<input [value]="value" (input)="onChange($event.target.value)" placeholder="Nom" />',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => NameInput),
    multi: true
  }]
})
export default class NameInput extends BaseValueAccessor {

}
