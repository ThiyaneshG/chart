import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup  } from '@angular/forms';
import {  ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})

export class SignupPageComponent  {
  signUpForm!: FormGroup;
  

  constructor(private router: Router) {
    this.signUpForm = new FormGroup({
      Name: new FormControl(''),
      email: new FormControl(''),
        password: new FormControl(''),
      inputs: new FormArray([new FormControl()])
    });
  }

  
  

  get inputControls() {
    return this.signUpForm.get('inputs') as FormArray;
  }

  addInput() {
    this.inputControls.push(new FormControl());
  }

 onSubmit(){
  const message = JSON.stringify(`${this.signUpForm.value.Name },${this.signUpForm.value.email},${this.signUpForm.value.password}`);
  alert(message);
  this.router.navigate(['/chart']); 
 }
}