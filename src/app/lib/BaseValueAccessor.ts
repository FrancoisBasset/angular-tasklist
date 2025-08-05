import { ControlValueAccessor } from '@angular/forms';

export abstract class BaseValueAccessor<T = any> implements ControlValueAccessor {
  value!: T;
  onChange = (_: T) => {};
  onTouched = () => {};
  writeValue(v: T) { this.value = v; }
  registerOnChange(fn: any) { this.onChange = fn; }
  registerOnTouched(fn: any) { this.onTouched = fn; }
}
