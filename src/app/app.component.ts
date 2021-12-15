import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'playground';
  showVehicles: boolean = true;
  showHouses: boolean = false;
  

  toggleMenu(){
    this.showVehicles  = !this.showVehicles;
    this.showHouses  = !this.showHouses;
  }
}
