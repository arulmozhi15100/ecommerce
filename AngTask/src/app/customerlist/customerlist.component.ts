import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup} from '@angular/forms'
import { ApiService } from '../shared/api.service';
import { EmployeeModel } from './customer list.model';

@Component({
  selector: 'app-customerlist',
  templateUrl: './customerlist.component.html',
  styleUrls: ['./customerlist.component.css']
})
export class CustomerlistComponent implements OnInit {
  
  formValue !: FormGroup;
  employeeModelObj : EmployeeModel = new EmployeeModel();
  employeeData !: any;
  showAdd!: boolean;
  showUpdate!: boolean;
  constructor(private formbuilder: FormBuilder, 
    private api : ApiService) { }

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      firstName : [''],
      lastName : [''],
      email : [''],
      mobile : [''],
      salary : [''],
      
    })
    this.getAllEmployee();

  }
  clickAddEmployee(){
    this.formValue.reset();
    this.showAdd = true;
    this.showUpdate = false;
  }
  postEmployeeDetails(){
    this.employeeModelObj.firstName= this.formValue.value.firstName;
    this.employeeModelObj.lastName= this.formValue.value.lastName;
    this.employeeModelObj.email= this.formValue.value.email;
    this.employeeModelObj.mobile= this.formValue.value.mobile;
    this.employeeModelObj.salary= this.formValue.value.salary;
    

this.api.postEmployee(this.employeeModelObj)
.subscribe(rest=>{
  console.log(rest);
  alert("Employee Added Successfully")
  let ref = document.getElementById('cancel')
  ref?.click();
  this.formValue.reset();
  this.getAllEmployee();
  },
err=>{
  alert("Something went wrong");

})
  }
getAllEmployee(){
  this.api.getEmployee()
  .subscribe(res=>{
    this.employeeData = res;

  })
}
onEdit(row: any){
  console.log(row)
  this.showAdd = false;
  this.showUpdate = true;
  this.employeeModelObj.id = row.id;
  this.formValue.controls['firstName'].setValue(row.firstName);
  this.formValue.controls['lastName'].setValue(row.lasttName);
  this.formValue.controls['email'].setValue(row.email);
  this.formValue.controls['mobile'].setValue(row.mobile);
  this.formValue.controls['salary'].setValue(row.salary);

}
updateEmployeeDetails(){
  this.employeeModelObj.firstName= this.formValue.value.firstName;
    this.employeeModelObj.lastName= this.formValue.value.lastName;
    this.employeeModelObj.email= this.formValue.value.emailId;
    this.employeeModelObj.mobile= this.formValue.value.mobileNumber;
    this.employeeModelObj.salary= this.formValue.value.salary;
    
    this.api.updateEmployee(this.employeeModelObj,this.employeeModelObj.id)
    .subscribe(res=>{
      alert("Updated Successfully");
      let ref = document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.getAllEmployee();
    })

}

}

