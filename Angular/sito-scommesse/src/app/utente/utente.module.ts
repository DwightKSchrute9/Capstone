import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { UtenteComponent } from './utente.component';

@NgModule({
  imports: [
    CommonModule,
    MatMenuModule // Importa MatMenuModule
  ],
  declarations: [UtenteComponent],
  exports: [UtenteComponent]
})
export class UtenteModule { }
