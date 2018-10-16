import { Component, OnInit } from '@angular/core';
import { ClassificationService } from '../shared/classification/classification.service';
import { PreorderService } from '../shared/preorder/preorder.service';
import {PageEvent} from '@angular/material';
import {Router} from '@angular/router';
import { Form } from '@angular/forms';
export interface PeriodicElement {  
  productId: number;
  productName: string;
  classification:string;
  country:string;
  type:string;
  detail:string;
  price:number;
  imgUrl:string;
}
@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {
  products:Array<any>; //source
  dataSource:any;
  pageEvent: PageEvent;
  activePageDataChunk = [];
  productList = [];
  pageSize = 4;
  productLength:any;
  username = 'YoYo';


  constructor(private classificationService: ClassificationService,private preorderService: PreorderService,private router:Router) { }
  ngOnInit() {  
    this.getProductList();
  }

  getProductList(){
    this.classificationService.getProduct().subscribe(data => {
    this.products = data;
    this.activePageDataChunk = this.products.slice(0,this.pageSize);
    this.productLength = this.products.length;
    console.log(data);
    });
  }

  onPageChanged(e) {
    let firstCut = e.pageIndex * e.pageSize;
    let secondCut = firstCut + e.pageSize;
    this.activePageDataChunk = this.products.slice(firstCut, secondCut);
  }

  
  getProductLength():number{
    return this.productLength;
  }

  setProductLength(num:number){
    this.productLength = num;
  }

  getProduct():Array<any>{
    return this.products;
  }
  
}
