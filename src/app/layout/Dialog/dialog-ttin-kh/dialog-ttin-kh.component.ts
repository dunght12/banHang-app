import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog-ttin-kh',
  templateUrl: './dialog-ttin-kh.component.html',
  styleUrls: ['./dialog-ttin-kh.component.css']
})
export class DialogTtinKHComponent implements OnInit {
  @Input() displayDialogKH:boolean = false;
  show4 !: boolean;
  constructor() { }
  cities : any[] = [
    {name : 'Hà Nội'},
    {name : 'Hải Phòng'},
    {name : 'Bắc Ninh'},
    {name : 'Bắc Giang'},
    {name : 'Hà Nam'},
    {name : 'Ninh Bình'},
    {name : 'Hải Dương'}
];
district : any[]=[
    {name : 'Cầu Giấy'},
    {name : 'Ba Đình'},
    {name : 'Đống Đa'},
    {name : 'Hoàn Kiếm'},
    {name : 'Long Biên'},
    {name : 'Tây Hồ'},
]
phuongXa : any[] = [
    {name : 'Mai Dịch'},
    {name : 'Dịch Vọng'},
    {name : 'Nghĩa Tân'},
    {name : 'Nghĩa Đô'},
    {name : 'Quan Hoa'}
]
  ngOnInit(): void {
  }

  showDialogTimKiemKH() {
    // this.displayDialogTimKiemKh = true;
    this.show4 =! this.show4;
  }
}
