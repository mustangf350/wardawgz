import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employment',
  templateUrl: './employment.component.html',
  styleUrls: ['./employment.component.css']
})
export class EmploymentComponent implements OnInit {

 itemCount: number =  15;
 btnText: string = 'Employment';
 goalText: string = 'Apply for Job';

  constructor() { }

  ngOnInit() {
  }

}
