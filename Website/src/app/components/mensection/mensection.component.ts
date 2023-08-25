import { Component, OnInit, Input } from '@angular/core';
import { products } from 'src/app/interfaces/products';
import { ApiService } from 'src/app/services/api.service';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-mensection',
  templateUrl: './mensection.component.html',
  styleUrls: ['./mensection.component.css']
})
export class MensectionComponent implements OnInit {

  public productList : any ;
  public menList : any =[];

  constructor(private api : ApiService) { }

  ngOnInit(): void {

    this.api.getProduct()
    .subscribe(res=>{
      this.productList = res;
      this.productList.forEach((a:any) => {
        if(a.gender === 0){
          this.menList.push(a);
          console.log("men");
        }
        Object.assign(a,{quantity:1,total:a.price});
      });
      console.log(this.productList)
    });

  }

}
