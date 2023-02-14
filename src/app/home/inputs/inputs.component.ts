import { inputsFormControls } from './inputsFormControls';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.css']
})
export class InputsComponent implements OnInit {
  public form!:FormGroup;
  public formControls = inputsFormControls;
  constructor(private formBuilder:FormBuilder) {
    this.createForm()
   }

  ngOnInit(): void {
    
  }
  private createForm() {
    this.form = this.formBuilder.group({})
    this.form.addControl(this.formControls.finInput, this.formBuilder.control(null));
  }
}
