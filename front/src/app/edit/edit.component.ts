import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RetailProfileModel } from '../Models/retailprofile.model';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  uid = this.aroute.snapshot.params['id'];

  @Input()
  retailProfileObj: RetailProfileModel={
    id : this.uid,
    userName :'',
    email : '',
    phNumber : '',
    password : '',
    country : '',
    networkId: '',
    status : '',
    timeZone: ''
  }

  
  

  // retailProfileObj : RetailProfileModel = new RetailProfileModel();
  constructor(private fb: FormBuilder,
    private api : ApiService,
    private router : Router,
    private aroute: ActivatedRoute) { }

  public editForm: FormGroup;


  

  ngOnInit(): void {

    this.api.getData(this.uid).subscribe((res)=>(this.retailProfileObj));
    this.editForm = this.fb.group({
    userName: ['',Validators.required,Validators.pattern('^[a-zA-Z]+$')],
    email: ['', Validators.required ],
    phNumber :['', Validators.required ],
    password : ['', Validators.required ],
    country : ['', Validators.required ]
  }) 

  this.editForm.controls["userName"].setValue(this.retailProfileObj.userName);
  this.editForm.controls["email"].setValue(this.retailProfileObj.email);
  this.editForm.controls["phNumber"].setValue(this.retailProfileObj.phNumber);
  this.editForm.controls["password"].setValue(this.retailProfileObj.password);
  this.editForm.controls["country"].setValue(this.retailProfileObj.country);

  
}

get c() { return this.editForm.controls; }


// onEdit(rd:any){
//   this.retailProfileObj.id==rd.id;
//   this.editForm.controls["userName"].setValue(rd.userName);
//   this.editForm.controls["email"].setValue(rd.email);
//   this.editForm.controls["phNumber"].setValue(rd.phNumber);
//   this.editForm.controls["password"].setValue(rd.password);
//   this.editForm.controls["country"].setValue(rd.country);
// }



updateRetailProfileData(){
  this.retailProfileObj.userName = this.editForm.value.userName;
  this.retailProfileObj.email = this.editForm.value.email;
  this.retailProfileObj.phNumber = this.editForm.value.phNumber;
  this.retailProfileObj.password = this.editForm.value.password;
  this.retailProfileObj.country = this.editForm.value.country;

  this.api.updateData(this.retailProfileObj,this.retailProfileObj.id).subscribe(res=>{
    console.log(res);
    alert("Retail Profile Created")
  },
  err=>{
    alert("Something went wrong")
  })

  
} 
}