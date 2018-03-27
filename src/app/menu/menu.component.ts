import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {


  itemCount: number =  3;
 btnText: string = ' Menu';
 goalText: string = 'Dogs and Sliders';

  constructor() { }

  ngOnInit() {
  }

}
