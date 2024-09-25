import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';


import { HeaderComponent } from './components/header/header.component';
import { IntroComponent } from './components/intro/intro.component';
import { TechnologyComponent } from './components/technology/technology.component';
import { PartnersComponent } from './components/partners/partners.component';
import { TestimonialComponent } from './components/testimonial/testimonial.component';
import { SegurosComponent } from './features/seguros/seguros.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { InsuranceComponent } from './components/insurance/insurance.component';
import { AdvantagesComponent } from './components/advantages/advantages.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { StoreLocationComponent } from './components/store-location/store-location.component';
import { ContactComponent } from './features/contact/contact.component';
import { BudgetComponent } from './features/budget/budget.component';
import { ScootersListComponent } from './components/scooters-list/scooters-list.component';
import { ScooterDetailsComponent } from './scooter-details/scooter-details.component';
import { SegurosScooterComponent } from './components/seguros-scooter/seguros-scooter.component';
import { ScootersComponent } from './features/scooters/scooters.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IntroComponent,
    TechnologyComponent,
    PartnersComponent,
    TestimonialComponent,
    SegurosComponent,
    FooterComponent,
    HomeComponent,
    InsuranceComponent,
    AdvantagesComponent,
    QuestionsComponent,
    StoreLocationComponent,
    ContactComponent,
    BudgetComponent,
    ScootersListComponent,
    ScooterDetailsComponent,
    SegurosScooterComponent,
    ScootersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
