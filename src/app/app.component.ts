import { Component } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { ProductService } from "./product.service";
import { Product } from "./model/product";
import { Employee } from "./model/employee";
import { EmployeeService } from "./employee.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  

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
  lyDoGiamGia : any[]=[
    {name : 'Sinh nhật Viettel'},
    {name : 'Sinh nhật KH'},
    {name : 'Khách VIP'},
    {name : 'Khách VVIP'}
  ]
  hinhThucTT : any[]=[
    {name : 'Tiền mặt'},
    {name : 'Thẻ ATM'},
    {name : 'VNPAY'},
    {name : 'ViettelPay'},
    {name : 'MOMO'},
    {name : 'AirPay'}
  ]

  display: boolean = false;
  displayMaximizable: any;
  displayMaximizable1: any;
  displayDialogGiamGia : any;
  displayDialogTien : any;
  displayDialogKH : any;
  displayDialogTimKiemKh : any;
  displayDialogKMai : any;
  displayDialogCfKMai : any;

  showMaximizableDialog() {
    this.displayMaximizable = true;
  }
  showMaximizableDialog1(){
    this.displayMaximizable1 = true;
  }
  showDialogGiamGia(){
    this.displayDialogGiamGia = true;
  }
  showDialogTien(){
    this.displayDialogTien = true;
  }
  showDialogKH(){
    this.displayDialogKH = true
  }
  showDialogTimKiemKH() {
    this.displayDialogTimKiemKh = true;
  }
  showDialogKMai(){
    this.displayDialogKMai = true;
  }
  showDialogCfKMai(){
    this.displayDialogCfKMai = true;
  }

  products : Product[] = [];
  cols : any[] = [];

  employee : Employee[] = [];

  items: MenuItem[] = [];
  home: any;
  constructor(private productService : ProductService,
              private employeeService : EmployeeService){}

  ngOnInit(){
    this.productService.getAllProducts().then((data:any) => 
    this.products = data);
    // this.productService.getAllProducts().subscribe((data : Product[]) => {
    //   this.products = data;
    // });
    this.employeeService.getAllEmployees().then((data:any) =>
    this.employee = data); 
    
    this.cols = [
      {field : 'xuat', header:'Xuất'},
      {field : 'hinhThucXuat', header:'Hình thức Xuất'},
      {field : 'maSanPham', header:'Mã sản phẩm'},
      {field : 'tenSanPham', header:'Tên sản phẩm'},
      {field : 'IMEI', header:'IMEI'},
      {field : 'status', header: 'Trạng thái'},
      {field : 'hanBaoHanh', header:'Hạn bảo hành'},
      {field : 'donGia', header:'Đơn giá'},
      {field : 'VAT', header:'VAT'},
      {field : 'soLuong', header:'Số lượng'},
      {field : 'thanhTien', header:'Thành tiền'},
      {field : 'ghiChuHD', header:'Ghi chú HĐ'}
    ];

    this.items = [
      {label: 'Bán hàng'},
      {label: 'Bán hàng nhanh'},
      {label: 'Bán hàng siêu thị'},


  ];
  
    this.home = {label:' Trang chủ' , icon: 'pi pi-home'};
    
  }


}
