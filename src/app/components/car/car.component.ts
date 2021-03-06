import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  cars: Car[] = [];
  constructor(private carService:CarService, private activatedRoute:ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["colorId"]){
        this.getByColorId(params["colorId"])
      }
      else if(params["brandId"]){
        this.getByBrandId(params["brandId"])
      }
      else{
        this.getCars();
      }
    })
  }

  getCars(){
    this.carService.getCars().subscribe(response=>{
      this.cars = response.data;
    })
  }
  getByColorId(colorId:number){
    this.carService.getByColorId(colorId).subscribe(respnse=>{
      this.cars = respnse.data;
    })
  }
  getByBrandId(brandId:number){
    this.carService.getByBrandId(brandId).subscribe(response=>{
      this.cars = response.data;
    })
  }
}
