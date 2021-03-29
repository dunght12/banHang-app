import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { AccordionModule } from "primeng/accordion";
import { FormsModule } from "@angular/forms";
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

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
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

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
