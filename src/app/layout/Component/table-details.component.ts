import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { ProductService } from "../../product.service";
import { Product } from "../../model/product";

@Component({
    selector: 'app-table-filter',
    templateUrl: './table-details.component.html',
    styleUrls: ['../layout.component.css']
})

export class TableDetailsComponent implements OnInit{
    constructor(private productService : ProductService){}
    
    products : Product[] = [];
    cols : any[] = [];

    ngOnInit(): void {
        this.productService.getAllProducts().then((data:any) => 
        this.products = data);

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
    }
}