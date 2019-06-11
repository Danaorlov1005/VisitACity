import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {GlobalService} from '../global.service';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})

export class CreateUserComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private globalService: GlobalService, private http: HttpClient, private router: Router) {}
  ngOnInit() {
  this.registerForm = this.formBuilder.group({
          UserName: ['', [Validators.required, Validators.email]],
          Password: ['', [Validators.required, Validators.minLength(6)]]
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    const user = this.registerForm.get('UserName').value;
    const password = this.registerForm.get('Password').value;
    this.http.post('http://localhost:3000/addNewUser', {'UserName': user, 'Password': password})
      .subscribe(res => {
        this.globalService.setUser(user);
        this.router.navigate(['/app-landing-page']);
      }, err => {
        alert('לא ניתן היה להרשם, התקבלה שגיאה מהשרת');
      });
  }

}
