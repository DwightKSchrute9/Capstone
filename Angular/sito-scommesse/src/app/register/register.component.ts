import { Component } from '@angular/core';
import { AuthenticationService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  name: string = '';
  surname: string = '';
  email: string = '';
  password: string = '';
  creditCardNumber: string = '';
  isSubmitting: boolean = false;

  constructor(private authService: AuthenticationService) { }

  onSubmit(): void {
    this.isSubmitting = true;
    this.authService.register(this.name, this.surname, this.email, this.password, this.creditCardNumber)
      .subscribe(() => {
        // redirect to login page or show success message
        this.isSubmitting = false;
      }, (error) => {
        console.log(error);
        this.isSubmitting = false;
      });
  }
}


