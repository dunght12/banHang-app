import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Employee } from "./model/employee";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }
  jsonEmpUrl : string = "../assets/employee.json";
  getAllEmployees(){
    return this.http.get<any>(this.jsonEmpUrl)
    .toPromise().then(res => <Employee>res.data)
    .then(data => {return data;});
  }
}
