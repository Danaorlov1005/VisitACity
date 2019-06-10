import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {GlobalService} from '../global.service';
import {HttpClient, HttpParams} from '@angular/common/http';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})

export class UserLoginComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private globalService: GlobalService, private http: HttpClient, private fb: FormBuilder) {}
  ngOnInit() {
    this.createForm();
    this.registerForm = this.formBuilder.group({
      // firstName: ['', Validators.required],
      // lastName: ['', Validators.required],
      UserName: ['', [Validators.required, Validators.email]],
      Password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  createForm() {
    this.registerForm = this.fb.group({
      UserName: ['', Validators.required ]
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  saveUser() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    const user = this.registerForm.get('UserName').value;
    const password = this.registerForm.get('Password').value;
    this.http.get('http://localhost:3000/getUser?UserName=' + user + '&Password=' + password)
      .subscribe(res => {
        console.log(res);
        this.globalService.setUser(user);
      }, err => {return; });
  }

}
