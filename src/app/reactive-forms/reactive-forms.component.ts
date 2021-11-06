import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent implements OnInit {

employeeForm : FormGroup = new FormGroup({
  fullName: new FormControl(''),
  email: new FormControl('')
});
  constructor() { }

  ngOnInit() {
   
  }

  onSubmit(): void {
    console.log(this.employeeForm?.value)
  }
}
