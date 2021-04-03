import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog-tim-kiem-nv',
  templateUrl: './dialog-tim-kiem-nv.component.html',
  styleUrls: ['./dialog-tim-kiem-nv.component.css']
})
export class DialogTimKiemNVComponent implements OnInit {
  @Input() displayMaximizable1:boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }

}
