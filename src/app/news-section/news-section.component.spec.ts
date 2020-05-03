import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { NewsSectionComponent } from './news-section.component';
 
describe('NewsSectionComponent', () => {
 
  let component: NewsSectionComponent;
  let fixture: ComponentFixture<NewsSectionComponent>;
 
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [],
      declarations: [
        NewsSectionComponent
      ],
    }).compileComponents();
  }));
 
  beforeEach(() => {
    fixture = TestBed.createComponent(NewsSectionComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();
  });
 
  it('should create news section component', () => {
    expect(component).toBeTruthy();
  });
 
  it('should have News Center as heading', () => {
    const element = fixture.debugElement.nativeElement.querySelector('#heading');
    const textToFind = "News Center";
    expect(element.textContent).toContain(textToFind);
  });
 
});