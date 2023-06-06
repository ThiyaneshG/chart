import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartPageComponent } from './components/chart-page/chart-page.component';
import { SignupPageComponent } from './components/signup-page/signup-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: SignupPageComponent },
  { path: 'chart', component: ChartPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
