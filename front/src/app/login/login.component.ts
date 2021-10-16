import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';
import { ApiService } from '../service/api.service';


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  
  loginForm = new FormGroup({
    email : new FormControl('bharath'),
    password : new FormControl('')
  });
  
  constructor( private fb: FormBuilder,
    private api : ApiService,
    private http:HttpClient,
    private router: Router,
    public aroute: ActivatedRoute,){}

  // loginForm: FormGroup;
  // constructor( 
  //   private fb: FormBuilder,
  //   private router:Router) { }


  ngOnInit(): void{
    this.loginForm = this.fb.group({
    
    email: ['', Validators.required,Validators.email ], 
    password : ['', Validators.required,Validators.minLength(5) ],
    
  }) 
}

get c() { return this.loginForm.controls; }
    

 

   login()
   {
    //  this.api.getData<any>("http://localhost:3000/userDetails").subscribe(res=>{
    //    const user = res.find((a:any)=>{
    //      return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
    //    });
    //    if(user){
    //      alert("Login Success");
    //      this.loginForm.reset();
    //      this.router.navigate(['admin']);
    //    }else{
    //      alert("User Not Found");
    //    }(err: any)=>{
    //      alert("Something went wrong");
    //    }
       
    //  })


    }

  }