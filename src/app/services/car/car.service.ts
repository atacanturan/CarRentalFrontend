import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Car } from 'src/app/models/car';
import { ListResponseModel } from 'src/app/models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl='https://localhost:44349/api/';
  constructor(private httpClient:HttpClient) {
   }

   getCars():Observable<ListResponseModel<Car>>{
     let newPath:string = this.apiUrl + "cars/getcardetails";
     return this.httpClient.get<ListResponseModel<Car>>(newPath);
   }
   getByColorId(colorId:number):Observable<ListResponseModel<Car>>{
     let newPath:string = this.apiUrl + "cars/getbycolorid?colorId="+colorId;
     return this.httpClient.get<ListResponseModel<Car>>(newPath);
   }
   getByBrandId(brandId:number):Observable<ListResponseModel<Car>>{
     let newPath:string = this.apiUrl + "cars/getbybrandid?brandid="+brandId;
     return this.httpClient.get<ListResponseModel<Car>>(newPath);
   }
}
