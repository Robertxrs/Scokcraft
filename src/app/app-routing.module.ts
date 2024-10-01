import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScootersListComponent } from './components/scooters-list/scooters-list.component';
import { SegurosComponent } from './features/seguros/seguros.component';
import { ContactComponent } from './features/contact/contact.component';
import { HomeComponent } from './home/home.component';
import { BudgetComponent } from './features/budget/budget.component';
import { ScooterDetailsComponent } from './features/scooter-details/scooter-details.component';
import { ScootersComponent } from './features/scooters/scooters.component';

const routes: Routes = [
  { path: 'scooter', component: ScootersComponent },
  { path: 'insurance', component: SegurosComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'scooter/:id', component: ScooterDetailsComponent },
  { path: 'budget', component: BudgetComponent},
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
