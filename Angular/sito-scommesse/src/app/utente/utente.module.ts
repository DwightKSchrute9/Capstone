import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { UtenteComponent } from './utente.component';
import { AuthenticationService } from '../auth.service';

@NgModule({
  imports: [
    CommonModule,
    MatMenuModule ,// Importa MatMenuModule
    AuthenticationService
  ],
  declarations: [UtenteComponent],
  exports: [UtenteComponent]
})
export class UtenteModule { }
