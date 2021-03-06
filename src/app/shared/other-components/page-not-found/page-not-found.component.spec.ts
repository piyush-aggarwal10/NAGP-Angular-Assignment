import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PageNotFoundComponent } from './page-not-found.component';

describe('PageNotFoundComponent', () => {
    let component: PageNotFoundComponent;
    let fixture: ComponentFixture<PageNotFoundComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PageNotFoundComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PageNotFoundComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create page not found component', () => {
        expect(component).toBeTruthy();
    });

    it("should have OOPS, THE PAGE YOU ARE LOOKING FOR CAN'T BE FOUND as text", () => {
        const fixture = TestBed.createComponent(PageNotFoundComponent);
        const element = fixture.debugElement.nativeElement.querySelector('h3');
        const textToFind = "OOPS, THE PAGE YOU ARE LOOKING FOR CAN'T BE FOUND!";
        expect(element.textContent).toContain(textToFind);
    });
});

