import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { FooterComponent } from "./Component/footer.component";
import { TableDetailsComponent } from "./Component/table-details.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AccordionModule } from "primeng/accordion";
import { InputTextModule } from "primeng/inputtext";
import {ButtonModule} from 'primeng/button';
import {InputNumberModule} from 'primeng/inputnumber';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {DialogModule} from 'primeng/dialog';
import {CheckboxModule} from 'primeng/checkbox';

import {TableModule} from 'primeng/table';
import { DropdownModule } from "primeng/dropdown";
import {TabMenuModule} from 'primeng/tabmenu';
import {TabViewModule} from 'primeng/tabview';
import {RadioButtonModule} from 'primeng/radiobutton';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import {InputMaskModule} from 'primeng/inputmask';

import { FilterComponent } from './Component/filter.component';
import { TestComponent } from './Component/test.component';
import { DialogTimKiemSPComponent } from './Dialog/dialog-tim-kiem-sp/dialog-tim-kiem-sp.component';
import { DialogTimKiemNVComponent } from './Dialog/dialog-tim-kiem-nv/dialog-tim-kiem-nv.component';
import { DialogTtinKHComponent } from './Dialog/dialog-ttin-kh/dialog-ttin-kh.component';
import { DialogTimKiemKHComponent } from './Dialog/dialog-tim-kiem-kh/dialog-tim-kiem-kh.component';
import { DialogKMaiComponent } from './Dialog/dialog-kmai/dialog-kmai.component';
import { DialogCfKMaiComponent } from './Dialog/dialog-cf-kmai/dialog-cf-kmai.component';
import { DialogGiamGiaComponent } from './Dialog/dialog-giam-gia/dialog-giam-gia.component';
import { DialogTienThanhToanComponent } from './Dialog/dialog-tien-thanh-toan/dialog-tien-thanh-toan.component';

@NgModule({
  declarations: [LayoutComponent, 
                FilterComponent,
                FooterComponent,
                TableDetailsComponent,
                TestComponent,
                DialogTimKiemSPComponent,
                DialogTimKiemNVComponent,
                DialogTtinKHComponent,
                DialogTimKiemKHComponent,
                DialogKMaiComponent,
                DialogCfKMaiComponent,
                DialogGiamGiaComponent,
                DialogTienThanhToanComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    AccordionModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    InputNumberModule,
    InputTextareaModule,
    DialogModule,
    CheckboxModule,
    TableModule,
    DropdownModule,
    HttpClientModule,
    TabMenuModule,
    TabViewModule,
    RadioButtonModule,
    BreadcrumbModule,
    ReactiveFormsModule,
    InputMaskModule
  ]
})
export class LayoutModule { }
