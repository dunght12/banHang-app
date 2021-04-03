import { Component, Input, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ProductService } from "../../product.service";
import { Product } from "../../model/product"
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { CommonServiceService } from 'src/app/services/common-service.service';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['../layout.component.css']
})

export class FilterComponent implements OnInit {
  show1 !: boolean;
  show2 !: boolean;
  show3 !: boolean;
  show4 !: boolean;
  show5 !: boolean;
  show6 !: boolean;
  frmBanHang !: FormGroup;    

  cities: any[] = [
    { name: 'Hà Nội' },
    { name: 'Hải Phòng' },
    { name: 'Bắc Ninh' },
    { name: 'Bắc Giang' },
    { name: 'Hà Nam' },
    { name: 'Ninh Bình' },
    { name: 'Hải Dương' }
  ];
  district: any[] = [
    { name: 'Cầu Giấy' },
    { name: 'Ba Đình' },
    { name: 'Đống Đa' },
    { name: 'Hoàn Kiếm' },
    { name: 'Long Biên' },
    { name: 'Tây Hồ' },
  ]
  phuongXa: any[] = [
    { name: 'Mai Dịch' },
    { name: 'Dịch Vọng' },
    { name: 'Nghĩa Tân' },
    { name: 'Nghĩa Đô' },
    { name: 'Quan Hoa' }
  ]
  nganhHang: any[] = [
    { name: 'Tất cả' },
    { name: 'Điện thoại' },
    { name: 'Máy tính' }
  ]
  maker: any[] = [
    { name: 'Tất cả' },
    { name: 'Samsung' },
    { name: 'Apple' },
    { name: 'OPPO' }
  ]

  display: boolean = false;
  // displayMaximizable: any;
  // displayMaximizable1: any;
  // displayDialogKH: any;
  // displayDialogTimKiemKh: any;
  // displayDialogKmai: any;
  
  // @Input() frmBanHang?:FormGroup;
  @Output() change: EventEmitter<any> = new EventEmitter();
  items: MenuItem[] = [];
  home: any;
  submitted = false;
  // @ViewChild('myDiv') myDiv!: ElementRef<HTMLElement>;

  
  constructor(private fb: FormBuilder, private commonServiceService: CommonServiceService) {
  }

  ngOnInit(): void {
    this.items = [
      { label: 'Bán hàng' },
      { label: 'Bán hàng nhanh' },
      { label: 'Bán hàng siêu thị' },
    ];

    this.home = { label: ' Trang chủ', icon: 'pi pi-home' };

    this.createForm();
    // console.log(this.frmBanHang);  
    // console.log(this.frmBanHang,"formGroup:::");
    this.commonServiceService.onlistenUpdateEvent().subscribe(() => {
      console.log("submitting....")
      // this.myDiv.nativeElement.click();
    });
  }

  createForm() {
    this.frmBanHang = this.fb.group({
      thanhVien: ['', [Validators.required,
      Validators.minLength(4)
      ]],
      dienThoai: ['', [Validators.required]],
      khachHang: ['', [Validators.required]],
      diaChi: ['',[Validators.required]],
      maSoThue:['',[Validators.required]],
      barcode: ['',[Validators.required]],
      coupon: ['',[Validators.required]]
      
    })
  }


  onSubmit() {
    console.log(this.frmBanHang);
    this.submitted = true;
  }

  showMaximizableDialog() {
    this.show1 = !this.show1;
  }
  showMaximizableDialog1() {
    this.show2 = !this.show2;
  }
  showDialogKH() {
    this.show3 = !this.show3;
  }
  showDialogKMai() {
    this.show5 = !this.show5;
  }
}


