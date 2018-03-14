import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories = [
    {name: "Pizza", order: "1", modifier: "hagy", modifyDay: "2018-01-04 15:08:39", status: "Hiện"},
    {name: "Pizza", order: "1", modifier: "hagy", modifyDay: "2018-01-04 15:08:39", status: "Hiện"}
  ];
  constructor() { 
    
  }

  ngOnInit() {
    
  }

}
