import { Component,OnInit } from '@angular/core';
import { WeatherData } from './models/weather.modules';
import { WeatherService } from './service/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private weatherService:WeatherService){}

  weatherData?:WeatherData;
  cityname:string='munich'
  ngOnInit(): void {
    this.weatherReport(this.cityname);
    
  }
  title = 'weather-app';
  onSubmit(){
    this.weatherReport(this.cityname);
    this.cityname='';
  }

  weatherReport(cityname:string){
    this.weatherService.getWeatherData(cityname).subscribe({
      next:(response)=>{
        this.weatherData=response
        console.log(response)
      }
    })
    
  }

}

