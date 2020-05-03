import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { DashboardComponent } from './dashboard.component';
import { HttpService } from '../services/http.service';
import { HttpClientModule } from '@angular/common/http';
 
describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let httpService: HttpService;
  let fixture: ComponentFixture<DashboardComponent>;
 
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [DashboardComponent],
      providers:[HttpService]
    })
    .compileComponents();
  }));
 
  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();
  });
 
  it('should contain statecode as TT', inject([HttpService], (httpService) => {
 
    httpService.GetStatesCovidData().subscribe((data: any)=>{
      expect(data.statewise[0].statecode).toContain("TT");    
    })    
  }));
 
  it('should contain statecode for Goa', inject([HttpService], (httpService) => {
 
    httpService.GetDistrictsCovidData().subscribe((data: any)=>{ 
      expect(data["Goa"]["statecode"]).toContain("GA");
    });
  }));

  it('should contain statecode as GJ', inject([HttpService], (httpService) => {
 
    httpService.GetDistrictsCovidData().subscribe((data: any)=>{
      expect(data["Gujarat"]["statecode"]).toContain("GJ");
    });
  }));
});