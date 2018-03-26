import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employment',
  templateUrl: './employment.component.html',
  styleUrls: ['./employment.component.css']
})
export class EmploymentComponent implements OnInit {

 itemCount: number = 5;
 btnText: string = 'submit';
 goalText: string = 'My first slider shop';

  constructor() { }

  ngOnInit() {
  }

}
