import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RetailProfileModel } from '../Models/retailprofile.model';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  public createForm : FormGroup;
  retailProfileObj : RetailProfileModel = new RetailProfileModel();
 
  constructor(private fb: FormBuilder,
    private api : ApiService) { }
  
  
 
  ngOnInit(): void {
    this.createForm = this.fb.group({
      userName: ['',Validators.required,Validators.minLength(4),Validators.pattern('^[a-zA-Z]+$')],
      email: ['', Validators.required,Validators.email ],
      phNumber :['', Validators.required ],
      password : ['', Validators.required,Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$') ],
      country : ['', Validators.required ]
    }) 
  }

  get c() { return this.createForm.controls; }

  postRetailProfileData(){
    this.retailProfileObj.userName = this.createForm.value.userName;
    this.retailProfileObj.email = this.createForm.value.email;
    this.retailProfileObj.phNumber = this.createForm.value.phNumber;
    this.retailProfileObj.password = this.createForm.value.password;
    this.retailProfileObj.country = this.createForm.value.country;

    this.api.postData(this.retailProfileObj).subscribe(res=>{
      console.log(res);
      alert("Retail Profile Created")
    },
    err=>{
      alert("Something went wrong")
    })

    
  } 
}


















 // public email: any;

  // createForm = new FormGroup({
    
  //   userName: new FormControl(this.create.userName, Validators.required),
  //   email : new FormControl('', Validators.required),
  //   phnumber : new FormControl(''),
  //   password : new FormControl(''),
  //   country : new FormControl('')
  // });