import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { CredentialService } from '../services/credentials.service';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
 
describe('LoginComponent', () => {
    let component: LoginComponent;
    let fixture: ComponentFixture<LoginComponent>;
 
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule,
                ReactiveFormsModule,
                FormsModule],
            declarations: [LoginComponent],
            providers: [CredentialService]
        })
            .compileComponents();
    }));
 
    beforeEach(() => {
        fixture = TestBed.createComponent(LoginComponent);
        component = fixture.componentInstance;
        component.ngOnInit();
        fixture.detectChanges();        
    });
 
    it('form should be valid', () => {
        component.userLogin.controls['emailId'].setValue('admin@nagarro.com');
        component.userLogin.controls['password'].setValue('admin123');
        expect(component.userLogin.valid).toBeTruthy();
    });
 
    it('form should be invalid', () => {
        component.userLogin.controls['emailId'].setValue('');
        component.userLogin.controls['password'].setValue('');
        expect(component.userLogin.valid).toBeFalsy();
    });
});