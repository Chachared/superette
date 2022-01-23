import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}
  email!: string;
  password!: string;
  errMsg!: string;

  ngOnInit(): void {
    this.email = 'tonadressemailducon@politesse.fr';
    this.password = 'maisnonjerigole';
  }

  onSubmitAuthForm(): void {
    this.errMsg = '';
    this.authService
      .signIn(this.email, this.password)
      .then(() => {
        this.router.navigateByUrl('/products');
      })
      .catch((errMsg) => {
        this.errMsg = errMsg;
      });
  }
}
