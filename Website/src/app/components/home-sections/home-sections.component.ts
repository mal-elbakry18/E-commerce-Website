import { Component, Input, OnInit } from '@angular/core';
import { products } from 'src/app/interfaces/products';

@Component({
  selector: 'app-home-sections',
  templateUrl: './home-sections.component.html',
  styleUrls: ['./home-sections.component.css']
})
export class HomeSectionsComponent implements OnInit {

  @Input() sectionName : string = "";
  @Input() arrayName : Array<products> = [];
  @Input() path : string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
