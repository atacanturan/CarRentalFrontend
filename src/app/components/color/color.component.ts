import { Component, OnInit } from '@angular/core';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color/color.service';
import { BrandComponent } from '../brand/brand.component';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  currentColor:Color;
  colors:Color[] = [];
  constructor(private colorService: ColorService, private brandComponent: BrandComponent) { }


  ngOnInit(): void {
    this.getColors();
  }
  

  getColors(){
    this.colorService.getColors().subscribe(response=>{
      this.colors = response.data;
    })
  }
  setCurrentColor(color:Color){
    this.currentColor = color;
  }
  getCurrentColorClass(color:Color){
    if(this.currentColor == color){
      this.brandComponent.currentBrand
      return "list-group-item cursor active";
    }
    else{
      return "list-group-item cursor"
    }
  }

}
