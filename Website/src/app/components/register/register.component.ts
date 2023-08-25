import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  register: any = FormGroup;
  userN : string ="";

  constructor(private fb: FormBuilder, private router: Router, private api: ApiService) { }

  ngOnInit(): void {

    this.register = this.fb.group({
      email: ['',Validators.compose([Validators.required, Validators.email])],
      password: ['',Validators.required]
    })

  }


  registerSubmit(data:any){
    let sentData = {
      email: data.email,
      password: data.password,
      username: this.userN 
    }
    this.userN += "00";
    this.api.addUser(sentData).subscribe((data:any)=>{
      console.log(data);
      console.log(this.userN);
    })
  }

}
