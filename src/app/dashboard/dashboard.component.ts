import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { IStatesData, IDistrictKeyValuePair } from '../shared/interfaces/interface';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    statesDataStore: IStatesData[] = [];
    districtDataStore: IDistrictKeyValuePair[] = [];
    stateSelected: string;
    isDistrictComponentVisible: boolean = false;

    constructor(private _http: HttpService){}

    ngOnInit(): void {
        this.stateSelected = "";
        this.districtDataStore = null;
        this.isDistrictComponentVisible = false;

        this._http.GetStatesCovidData().subscribe((response: any) => {
            this.statesDataStore = response.statewise;
        })
    }

    getDistrictsData(state: string): void {
        this.stateSelected = state;
        this.isDistrictComponentVisible = !this.isDistrictComponentVisible;

        this._http.GetDistrictsCovidData().subscribe((response: any) => {
            if(response[state] != null){
                this.districtDataStore = response[state]["districtData"];
            }
            
        })
        
        if(!this.isDistrictComponentVisible){
            this.districtDataStore = [];
        }
    }
}

