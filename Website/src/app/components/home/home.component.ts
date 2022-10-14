import { Component, OnInit } from '@angular/core';
import { products } from 'src/app/interfaces/products';
import { ApiService } from 'src/app/services/api.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  newProducts : Array<products> = [
    {name : "Watch" , price : 150.00, imageURL : "/assets/pics/watch.webp"},
    {name : "Plant" , price : 85.00, imageURL : "/assets/pics/plant1.webp"},
    {name : "Frame" , price : 75.00, imageURL : "/assets/pics/frame1.webp"},
  ]

  bestsellers : Array<products> = [
    {name : "shoes" , price : 90.00, imageURL : "/assets/pics/shoes1.webp"},
    {name : "Glasses" , price : 225.00, imageURL : "/assets/pics/glasses1.webp"},
    {name : "Hoodie" , price : 100.00, imageURL : "/assets/pics/hoodie1.webp"},
    {name : "Perfume" , price : 285.00, imageURL : "/assets/pics/perfume1.webp"},
    {name : "Scarf" , price : 165.00, imageURL : "/assets/pics/scarf1.webp"},
    {name : "Lamp" , price : 235.00, imageURL : "/assets/pics/lamp1.webp"},
    {name : "Plant" , price : 85.00, imageURL : "/assets/pics/plant1.webp"},
    {name : "Watch" , price : 150.00, imageURL : "/assets/pics/watch.webp"},
  ]

  public productList : any ;
  public filterCategory : any;

  public menList : any =[];
  public womenList : any=[];
  
  constructor(private api : ApiService) { }

  ngOnInit(): void {
    this.api.getProduct()
    .subscribe(res=>{
      this.productList = res;
      this.filterCategory = res;
      this.productList.forEach((a:any) => {
        if(a.gender === 0){
          this.menList.push(a);
          console.log("men");
        }else if(a.gender === 1){
          this.womenList.push(a);
        }
        Object.assign(a,{quantity:1,total:a.price});
      });
      console.log(this.productList)
    });
  }

  filter(gender:Number){
    this.filterCategory = this.productList
    .filter((a:any)=>{
      if(a.gender == gender || gender== null ){
        return a;
      }
    })
  }

}
