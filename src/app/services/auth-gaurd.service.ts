import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { isNullOrUndefined } from 'util';

@Injectable({
  providedIn: 'root'
})
export class AuthGaurd {

  constructor(private router: Router) {}
  canActivate(): boolean {
    if (!this.isUserLogin()) {
      this.router.navigate(['']);
      return false;
    }
    return true;
  }

  public isUserLogin(): boolean {
    const validUser: string = JSON.parse(sessionStorage.getItem("validUser"));
    console.log("Valid User: ", validUser);
    return (!isNullOrUndefined(validUser) && validUser !== "");
  }
}
