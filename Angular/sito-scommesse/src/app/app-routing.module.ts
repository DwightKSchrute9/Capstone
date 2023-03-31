import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BetComponent } from './bet/bet.component';
import { MatchesComponent } from './matches/matches.component';
import { UtenteComponent } from './utente/utente.component';
import { AnimazioneComponent } from './animazione/animazione.component';
const routes: Routes = [
  {path: '', redirectTo: '/animazione', pathMatch: 'full'},
  { path: '', component: AnimazioneComponent },
  { path: 'home', component: HomeComponent },
  { path: 'bet', component: BetComponent },
  { path: 'matches', component: MatchesComponent },
  { path: 'utente', component: UtenteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }





