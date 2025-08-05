import { Component, forwardRef } from "@angular/core";
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseValueAccessor } from "../lib/BaseValueAccessor";

@Component({
    selector: 'DateInput',
    template: '<input [value]="value" (input)="onChange($event.target.value)" placeholder="Échéance" />',
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => DateInput),
        multi: true
    }]
})
export default class DateInput extends BaseValueAccessor {
    
}