import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { environment } from 'environment/environment';
import {Observable} from 'rxjs';
import { WeatherData } from '../models/weather.modules';




@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http:HttpClient) { }
  getWeatherData(cityName:string):Observable<WeatherData>{
    return this.http.get<WeatherData>(environment.weatherApiBaseurl+'/city/'+cityName, {
      headers: new HttpHeaders()
      .set(environment.XRapidAPIHostHeaderName, environment.XRapidAPIHostHeaderValue)
      .set(environment.XRapidAPIKeyHeaderName,environment.XRapidAPIKeyHeaderValue),
    });
   }
}
