import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  itemCount: number =  2;
  btnText: string = ' Order';
  goalText: string = 'Place Order';
  constructor() { }

  ngOnInit() {
  }

}
