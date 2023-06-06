import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartPageComponent } from './components/chart-page/chart-page.component';
import { SignupPageComponent } from './components/signup-page/signup-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgChartsModule } from 'ng2-charts';
import { GoogleChartsModule } from 'angular-google-charts'; 
import { FormsModule } from '@angular/forms';
import { ChartComponent } from './components/chart/chart.component';
import { ToastrModule } from 'ngx-toastr';



 

@NgModule({
  declarations: [
    AppComponent,
    ChartPageComponent,
    SignupPageComponent,
    ChartComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    
    ReactiveFormsModule,
         NgChartsModule,GoogleChartsModule,
 FormsModule,
         ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
