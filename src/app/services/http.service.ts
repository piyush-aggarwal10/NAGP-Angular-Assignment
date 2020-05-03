import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Constants } from '../shared/constants';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  GetStatesCovidData() : any {
    return this._http.get(Constants.CovidInformationUrls.Urls.baseUrl + Constants.CovidInformationUrls.Urls.statesDataUrl);
  }

  GetDistrictsCovidData() : any {
    return this._http.get(Constants.CovidInformationUrls.Urls.baseUrl + Constants.CovidInformationUrls.Urls.districtsDataUrl);
  }
}
