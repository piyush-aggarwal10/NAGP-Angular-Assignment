import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { IDistrictKeyValuePair } from '../shared/interfaces/interface';


@Component ({
    selector: 'app-district-details',
    templateUrl: './district-details.component.html',
    styleUrls: ['./district-details.component.css']
})
export class DistrictDetailsComponent {
    @Input() districtsData: IDistrictKeyValuePair[] = [];
}