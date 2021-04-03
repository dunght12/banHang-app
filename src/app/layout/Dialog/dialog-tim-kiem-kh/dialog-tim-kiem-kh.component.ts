import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog-tim-kiem-kh',
  templateUrl: './dialog-tim-kiem-kh.component.html',
  styleUrls: ['./dialog-tim-kiem-kh.component.css']
})
export class DialogTimKiemKHComponent implements OnInit {
  @Input() displayDialogTimKiemKh:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
