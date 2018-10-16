import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-preorder',
  templateUrl: './show-preorder.component.html',
  styleUrls: ['./show-preorder.component.css']
})
export class ShowPreorderComponent implements OnInit {
  preorder:Array<any>;
  constructor() { 
    this.preorder = JSON.parse(localStorage.getItem("myObject"))
  }

  ngOnInit() {
    console.log(this.preorder)
  }
  

}
