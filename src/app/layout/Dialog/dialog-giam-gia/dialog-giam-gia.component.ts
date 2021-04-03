import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog-giam-gia',
  templateUrl: './dialog-giam-gia.component.html',
  styleUrls: ['./dialog-giam-gia.component.css']
})
export class DialogGiamGiaComponent implements OnInit {
  @Input() displayDialogGiamGia: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
