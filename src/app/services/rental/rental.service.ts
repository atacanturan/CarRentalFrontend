import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Rental } from 'src/app/models/rental';
import { ListResponseModel } from 'src/app/models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  apiUrl='https://localhost:44349/api/rentals/getrentaldetails';
  constructor(private httpClient:HttpClient) {
   }

   getRentals():Observable<ListResponseModel<Rental>>{
     return this.httpClient.get<ListResponseModel<Rental>>(this.apiUrl);
   }
}
