import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dialog-tien-thanh-toan',
  templateUrl: './dialog-tien-thanh-toan.component.html',
  styleUrls: ['./dialog-tien-thanh-toan.component.css']
})
export class DialogTienThanhToanComponent implements OnInit {
  @Input() displayDialogTien : boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
