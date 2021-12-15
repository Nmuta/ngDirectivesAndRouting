import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {

  makes: string[] = ["Honda", "BMW", "Lexus", "Chevy"];

  constructor() { }

  ngOnInit(): void {
  }

}
