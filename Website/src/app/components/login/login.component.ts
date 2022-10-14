import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: any = FormGroup;
  users: any = [];

  constructor(private fb: FormBuilder, private router: Router, private api: ApiService) { }

  ngOnInit(): void {
    this.login = this.fb.group({
      email: ['',Validators.compose([Validators.required, Validators.email])],
      password: ['',Validators.required]
    })

    this.api.getUser().subscribe((data: any)=>{
      this.users = data;
    })
  }


  loginSubmit(data: any){

    if(data.email){

      this.users.forEach((item: any)=>{
        if(item.email === data.email && item.password === data.password){
          localStorage.setItem("isLoggedIn", "true");
          this.router.navigate(['home']);
          console.log("done");
        }
      });
    }

  }



}
