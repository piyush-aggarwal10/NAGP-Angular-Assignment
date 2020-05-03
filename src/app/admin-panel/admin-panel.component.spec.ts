import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AdminPanelComponent } from './admin-panel.component';
import { NewsManagementService } from '../services/news-management.service';
 
describe('AdminPanelComponent', () => {
    let component: AdminPanelComponent;
    let fixture: ComponentFixture<AdminPanelComponent>;
 
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [ReactiveFormsModule,
                FormsModule],
            declarations: [AdminPanelComponent],
            providers: [NewsManagementService]
        })
        .compileComponents();
    }));
 
    beforeEach(() => {
        fixture = TestBed.createComponent(AdminPanelComponent);
        component = fixture.componentInstance;
        component.ngOnInit();
        fixture.detectChanges();        
    });
 
    it('form should be valid', () => {
        component.addNewsForm.controls['title'].setValue('title');
        component.addNewsForm.controls['description'].setValue('description');
        component.addNewsForm.controls['summary'].setValue('summary');
        component.addNewsForm.controls['fullNews'].setValue('fullNews');
        expect(component.addNewsForm.valid).toBeTruthy();
    });
 
    it('form should be invalid', () => {
        component.addNewsForm.controls['title'].setValue('');
        component.addNewsForm.controls['description'].setValue('');
        component.addNewsForm.controls['summary'].setValue('');
        component.addNewsForm.controls['fullNews'].setValue('');
        expect(component.addNewsForm.valid).toBeFalsy();
    });

});