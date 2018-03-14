import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.css']
})
export class TotalComponent implements OnInit {

	data = [
    	{num: "26,643,000", num2: "6,643,000", num3: "20,000,000"},
    	{num: "26,643,000", num2: "6,643,000"},
    	{num: "26", num2: "6", num3: "20"}
  	];
  	clicked(){
 	   alert ("Xem đi");
  	}
 	constructor() { }

 	ngOnInit() {
 	}

}
