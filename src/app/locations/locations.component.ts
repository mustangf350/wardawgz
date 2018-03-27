import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {


  itemCount: number =  2;
 btnText: string = 'Locations';
 goalText: string = 'Locations';
  constructor() { }

  ngOnInit() {
  }

}
