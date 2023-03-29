import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UtenteComponent } from './utente/utente.component';
import { HomeComponent } from './home/home.component'

const appRoutes: Routes = [
  { path: 'user', component: UtenteComponent },
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent,
    UtenteComponent,
    HomeComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
