import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CredentialService } from '../services/credentials.service';
import { Login } from '../shared/classes/classes';
import { ILoginInfo, IUserInfo } from '../shared/interfaces/interface';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    isLoginCredentialsCorrect: boolean;
    userLogin: FormGroup;

    constructor(private _credentials: CredentialService, private router: Router){}

    ngOnInit(): void {

        this.userLogin = new FormGroup({
            emailId: new FormControl('',[Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'), Validators.required]),
            password: new FormControl('',[Validators.required])
        });

        this.isLoginCredentialsCorrect = false;
    }

    Login(){

        var loginDetails: ILoginInfo = new Login(this.userLogin.value.emailId, this.userLogin.value.password);

        var user: IUserInfo = this._credentials.AuthenticateUser(loginDetails);
        if(user)
        {
            this._credentials.SaveUserCredentials(user); 
            this.router.navigate(['/dashboard']);

            this.isLoginCredentialsCorrect = true;
        }
        else{
            console.log("Unable to login user");
            this.isLoginCredentialsCorrect = false;
            alert("Invalid Credentials");
        }
        this.userLogin.reset();
    }
}