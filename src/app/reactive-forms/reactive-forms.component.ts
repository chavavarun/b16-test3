import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent implements OnInit {
sample: string ="";
public employeeForm : FormGroup;
  constructor( private _fb:FormBuilder) { }

  ngOnInit() {
   this.employeeForm=this._fb.group({
    fullName: new FormControl('',[Validators.required,Validators.minLength(5)]),
    email: new FormControl('',Validators.required)
  });

 
}
onSubmit(): void {
  if (this.employeeForm.valid) {

  
  console.log(this.employeeForm?.value)
  this.sample=this.employeeForm.controls['fullName'].value + " " + "submitted successfully";
  }
}
}
