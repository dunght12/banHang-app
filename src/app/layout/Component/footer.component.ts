import { Component, OnInit, Output, EventEmitter, Input, ViewChild } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { ProductService } from "../../product.service";
import { Product } from "../../model/product";
import {CommonServiceService} from '../../services/common-service.service';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['../layout.component.css']
})

export class FooterComponent implements OnInit{
    displayDialogGiamGia : any;
    displayDialogTien : any;
    // displayDialogKMai : any;
    // displayDialogCfKMai : any;
    show7 !: boolean;
    show8 !: boolean;
    
    submitted : boolean = false;
    @Output() onSendData = new EventEmitter<any>();

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
      
    constructor(private commonServiceService: CommonServiceService) {}  

    ngOnInit(): void {
    }

    showDialogGiamGia(){
        // this.displayDialogGiamGia = true;
        this.show7 = true;
    }
    showDialogTien(){
        this.show8 = true;
        console.log("show8");  
    }
    
    onSubmit(){
        this.onSendData.emit(this.submitted);    
    }

    filterChanged(event:any){

    }
}

