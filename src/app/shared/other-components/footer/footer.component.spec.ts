import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
    let component: FooterComponent;
    let fixture: ComponentFixture<FooterComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [FooterComponent]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(FooterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create footer component', () => {
        expect(component).toBeTruthy();
    });

    it('should have 2020 Copyright in footer component', () => {
        const fixture = TestBed.createComponent(FooterComponent);
        const element = fixture.debugElement.nativeElement.querySelector('div');
        const textToFind = "2020 Copyright";
        expect(element.textContent).toContain(textToFind);
    });
});



