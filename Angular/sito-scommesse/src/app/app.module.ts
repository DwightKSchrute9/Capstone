import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UtenteComponent } from './utente/utente.component';
import { HomeComponent } from './home/home.component';
import { BetComponent } from './bet/bet.component';
import { MatchesComponent } from './matches/matches.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTableModule} from '@angular/material/table';
import { AnimazioneComponent } from './animazione/animazione.component';
import { LoginComponent } from './login/login.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
//import { NightModeToggleComponent } from './night-mode-toogle/night-mode-toogle.component';
import { FooterComponent } from './footer/footer.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { AsideComponent } from './aside/aside.component';
import { BannerComponent } from './banner/banner.component';
import { CardsComponent } from './cards/cards.component';
import { ListComponent } from './list/list.component';
import { ContattiComponent } from './contatti/contatti.component';









const appRoutes: Routes = [

  { path: '', redirectTo: '/animazione', pathMatch: 'full' },
  { path: 'App', component: AppComponent },
  { path: 'home', component: HomeComponent },
  { path: 'aside', component: AsideComponent },
  { path: 'login', component: LoginComponent },
  { path: 'Registration', component: RegisterComponent },
  { path: 'utente', component: UtenteComponent },
  { path: 'bet', component: BetComponent },
  { path: 'matches', component: MatchesComponent },
  { path: 'animazione', component: AnimazioneComponent },
  { path: 'contatti', component: ContattiComponent },

];

@NgModule({
  declarations: [
    AnimazioneComponent,
    LoginComponent,
    AppComponent,
    UtenteComponent,
    HomeComponent,
    NavbarComponent,
  //  NightModeToggleComponent,
    FooterComponent,
    MatchesComponent,
    RegisterComponent,
    AsideComponent,
    BetComponent,
    BannerComponent,
    CardsComponent,
    ListComponent,
    ContattiComponent,



  ],

  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatMenuModule,
    MatListModule,
    MatCardModule,
    MatGridListModule,
    MatTableModule,
    MatFormFieldModule,
    FormsModule,
    FormsModule, // Aggiungi FormsModule
    ReactiveFormsModule,
    HttpClientModule,







  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
