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
  title(title: any) {
    throw new Error('Method not implemented.');
  }

  
  employee : Employee[] = [];

  
  constructor(private productService : ProductService,
              private employeeService : EmployeeService){}

  ngOnInit(){
    
    // this.productService.getAllProducts().subscribe((data : Product[]) => {
    //   this.products = data;
    // });
    this.employeeService.getAllEmployees().then((data1:any) =>
    this.employee = data1);
    
  }
}
