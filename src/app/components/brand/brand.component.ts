import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {
  currentBrand:Brand;
  brands:Brand[] = [];
  x:number = 0;
  constructor(private brandService: BrandService) { }

  ngOnInit(): void {
    this.getBrands();
  }

  getBrands(){
    this.brandService.getBrands().subscribe(response=>{
      this.brands = response.data;
    })
  }
  setCurrentBrand(brand:Brand){
    this.currentBrand = brand;
  }
  getCurrentBrand(brand:Brand){
    if(this.currentBrand == brand){
      return "list-group-item cursor active";
    }
    else{
      return "list-group-item cursor"
    }
  }
}
