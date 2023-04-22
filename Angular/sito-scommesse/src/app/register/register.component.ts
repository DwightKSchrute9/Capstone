
import { Component, EventEmitter, Output } from '@angular/core';
import { AuthenticationService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  name: string = '';
  username: string = '';
  email: string = '';
  password: string = '';
  creditCardNumber: string = '';
  isSubmitting: boolean = false;
  errorMessage:string = '';
  showSuccessMessage: boolean = false;

  @Output() close = new EventEmitter<void>();
  showRegisterModal: boolean = false;




  constructor(private authService: AuthenticationService) { }

  onSubmit(): void {
    this.isSubmitting = true;
    this.authService.register(this.name, this.username, this.email, this.password, this.creditCardNumber)
      .subscribe(() => {
        this.isSubmitting = false;
        this.showSuccessMessage = true;
      }, (error) => {
        console.log(error);
        this.isSubmitting = false;
        this.errorMessage = "L'utente si è registrato con sucesso, effettua il login";
      });
  }
  closeRegisterModal(): void {
    this.showRegisterModal = true;
  }


  closeModal() {
    this.close.emit();
  }
}
