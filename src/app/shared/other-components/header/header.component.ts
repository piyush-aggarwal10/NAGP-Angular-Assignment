import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CredentialService } from '../../../services/credentials.service';


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
    
    isUserLoggedIn: boolean = false;

    constructor(private router: Router, private _credentials: CredentialService){
        this._credentials.isLoggedIn.subscribe((isLoggedIn: boolean) => {
            this.isUserLoggedIn = isLoggedIn;
        })
    }

    ngOnInit(): void {
        this.isUserLoggedIn = this._credentials.isUserLoggedIn.value;
    }

    Logout(){
        this._credentials.ClearUserCredentials();
        this.router.navigate(['/dashboard']);
    }
}