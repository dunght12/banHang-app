import { Component, OnInit, ViewChild } from '@angular/core';
import { FilterComponent } from "../layout/Component/filter.component"; 

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  @ViewChild(FilterComponent) myFilterForm !: FilterComponent;
  constructor() { }
  
  ngAfterViewInit(){
   console.log(this.myFilterForm.frmBanHang.value,"in gia tri tu cha");
  }

  ngOnInit(): void {
  }
  onClickHere(){}  
  
  onGetData(event:any){
    console.log(event);
    if(event == false){
      this.myFilterForm.onCheckForm();
      console.log(this.myFilterForm.frmBanHang.value);
      
    }
  }
}
