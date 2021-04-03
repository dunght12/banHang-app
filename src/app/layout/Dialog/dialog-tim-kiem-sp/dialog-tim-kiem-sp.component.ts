import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog-tim-kiem-sp',
  templateUrl: './dialog-tim-kiem-sp.component.html',
  styleUrls: ['./dialog-tim-kiem-sp.component.css']
})
export class DialogTimKiemSPComponent implements OnInit {
  // display: boolean = false;
  @Input()displayMaximizable!:boolean;

  nganhHang : any[] = [
    {name : 'Tất cả'},
    {name : 'Điện thoại'},
    {name : 'Máy tính'}
  ]
  maker : any[]=[
    {name : 'Tất cả'},
    {name : 'Samsung'},
    {name : 'Apple'},
    {name : 'OPPO'}
  ]
  constructor() { }

  ngOnInit(): void {
  }
  
}
