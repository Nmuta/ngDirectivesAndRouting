import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarsComponent } from './cars/cars.component';
import { PlanesComponent } from './planes/planes.component';
import { TrucksComponent } from './trucks/trucks.component';
import { CondoComponent } from './condo/condo.component';
import { TownhomesComponent } from './townhomes/townhomes.component';

const routes: Routes = [
  {path: 'cars', component: CarsComponent},
  {path: 'planes', component: PlanesComponent},
  {path: 'trucks', component: TrucksComponent},
  {path: 'condos', component: CondoComponent},
  {path: 'townhomes', component: TownhomesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
