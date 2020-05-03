import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PrecautionsComponent } from './precautions.component';
 
describe('PrecautionsComponent', () => {
  let component: PrecautionsComponent;
  let fixture: ComponentFixture<PrecautionsComponent>;
 
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrecautionsComponent]
    })
    .compileComponents();
  }));
 
  beforeEach(() => {
    fixture = TestBed.createComponent(PrecautionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create precautions component', () => {
    expect(component).toBeTruthy();
  });
 
  it('should have COVID-19 in precautions', () => {
    const element = fixture.debugElement.nativeElement.querySelector('#precautions');
    const textToFind = "COVID-19";
    expect(element.textContent).toContain(textToFind);
  });
});