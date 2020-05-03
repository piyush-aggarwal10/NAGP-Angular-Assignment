import { Injectable, EventEmitter } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ILoginInfo, IUserInfo } from '../shared/interfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class CredentialService {

  adminDetails: IUserInfo[] = [];
  isLoggedIn: EventEmitter<boolean> = new EventEmitter<boolean>();
  isUserLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.hasToken());

  constructor(){
    this.adminDetails.push({
      userId: 1,
      emailId: "admin@nagarro.com",
      password: "admin123"
    });
  }

  GetUserCredentials = (): string => {
    return window.atob(sessionStorage["credentials"] ? sessionStorage["credentials"] : '');
  }

  ClearUserCredentials = (): void => {
    sessionStorage.removeItem("userid");
    sessionStorage.removeItem("credentials");
    this.isLoggedIn.emit(false);
    this.isUserLoggedIn.next(false);
  }

  isLoggedInUser(): Observable<boolean>{
    return this.isUserLoggedIn.asObservable();
  }

  canActivate(): boolean {
    if (!this.isUserLoggedIn.value) {
      return false;
    }
    else{
      return true;
    }
 
  }

  AuthenticateUser(loginInfo: ILoginInfo): IUserInfo
  {
      return this.adminDetails.find(admin => admin.emailId == loginInfo.emailId && admin.password == loginInfo.password);
  }

  GetUserId = () : number => {
    return sessionStorage["userid"];
  }

  private hasToken(): boolean {
    return !!sessionStorage["userid"];
  } 

  SaveUserCredentials = (loginInfo: IUserInfo): void => {
    sessionStorage["credentials"] = window.btoa(loginInfo.emailId + ":" + loginInfo.password);
    sessionStorage["userid"] = loginInfo.userId;
    this.isUserLoggedIn.next(true);
    this.isLoggedIn.emit(true);
  }


}
  