import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-home-sections',
  templateUrl: './home-sections.component.html',
  styleUrls: ['./home-sections.component.css']
})
export class HomeSectionsComponent implements OnInit {

  @Input() sectionName : string = "";
  @Input() arrayName : any = [];
  @Input() path : string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
