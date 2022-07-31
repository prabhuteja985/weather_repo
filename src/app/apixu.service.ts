import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApixuService {

  constructor(private http: HttpClient) {
    
   }

  getWeather(location: any){
    return this.http.get('https://api.weatherstack.com/current?access_key=68c07e3b0039b765c09058f9fa5af7ff&query=New%20York'+location);
  }
}


