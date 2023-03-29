import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UtenteComponent } from './utente/utente.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'utente', component: UtenteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

