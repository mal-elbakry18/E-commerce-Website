import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  public totalCartItems : number = 0;
  constructor(private cartService : CartService, private router: Router) { }

  ngOnInit(): void {

    this.cartService.getProducts().subscribe(
      res => {
        this.totalCartItems = res.length;
      }
    )
  }

  Logout(){
    localStorage.clear();
    this.router.navigate(['login']);
  }

}
