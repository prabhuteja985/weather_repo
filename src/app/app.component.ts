import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApixuService } from './apixu.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public weatherSearchForm!:FormGroup;
  public weatherData: any;
  constructor(private formBuilder: FormBuilder,
   private apixuService:ApixuService ){

    
 
  }
  ngOnInit(): void {
    this.weatherSearchForm = this.formBuilder.group ({
      location: ['']
    });
  }
  sendToAPIXU(formValues: any){
    // console.log(formValues);
    this.apixuService.getWeather(formValues.location).subscribe(data =>{
      this.weatherData = data;
      console.log(this.weatherData);
    
    });

  }
  
}
