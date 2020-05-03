import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpService } from '../services/http.service';
import { HttpClientModule } from '@angular/common/http';
import { DistrictDetailsComponent } from './district-details.component';
 
describe('DistrictDetailsComponent', () => {
  let component: DistrictDetailsComponent;
  let fixture: ComponentFixture<DistrictDetailsComponent>;
 
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [DistrictDetailsComponent],
      providers:[HttpService]
    })
    .compileComponents();
  }));
 
  beforeEach(() => {
    fixture = TestBed.createComponent(DistrictDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
 
  it('should create district-details component', () => {
      expect(component).toBeTruthy();
  });
});