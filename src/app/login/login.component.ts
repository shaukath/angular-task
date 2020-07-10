import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Album } from '../models/album.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public submitted: boolean;
  public showAlert: boolean;
  public loginForm: FormGroup;


  constructor(
    private dataService: DataService,
    private formBuilder: FormBuilder,
    private router: Router
    ) { 
      this.isUserLogin();
      this.submitted = false;
      this.showAlert = false;
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
  });
  }

  /**
   * Method to get login form controls
   */
  get login() { 
    return this.loginForm.controls; 
  }

  /**
   * Method to get form values
   */
  get formValue() {
    return this.loginForm.value;
  }

  /**
   * Method on submitting the login form
   */
  public onSubmit(): void {
    this.submitted = true;
    if (this.loginForm.invalid) {
        return;
    }
    this.validateLogin();
  }

  /**
   * Method to validate the user credentials
   */
  private validateLogin(): void {
    if (this.formValue.username === 'user1' && this.formValue.password === 'pa$$w0rd') {
      sessionStorage.setItem("validUser", 'true');
      this.router.navigate(['dashboard']);
    } else {
      this.showAlert = true;
      setTimeout(() => {
        this.showAlert = false;
      }, 40000000);
    }
  }

  public isUserLogin(): void {
    const validUser: string = JSON.parse(sessionStorage.getItem("validUser"));
    if(!isNullOrUndefined(validUser) && validUser !== "") {
      this.router.navigate(['dashboard']);
    }
  }

}
