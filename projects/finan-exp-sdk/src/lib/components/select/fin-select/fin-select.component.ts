import { Component, Input, Output, EventEmitter, OnInit, AfterViewInit } from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';
import { MustHaveControlName } from '../../inputs/MustHaveControlName';
import { finSelectButton } from './fin-select-button';
import { finSelectOption } from './fin-select-option';

@Component({
  selector: 'fin-select',
  templateUrl: './fin-select.component.html',
  styleUrls: ['./fin-select.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: FinSelectComponent,
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: FinSelectComponent,
    },
  ],
})
export class FinSelectComponent extends MustHaveControlName {
  override value!: string;
  @Input() options!: Array<finSelectOption>
  @Input() finSelectButton?: finSelectButton
  @Input() label?: string;
  @Input() required!: boolean;
  @Output() selectionChange = new EventEmitter();

  public selectType(selectedOptionValue: MatSelectChange) {
    this.markAsTouched();
    this.onChange(this.value);
    this.selectionChange.emit(selectedOptionValue);
  }
  override writeValue(value: string): void {
    if (value !== null) {
      this.value = value;
    }
  }
}
