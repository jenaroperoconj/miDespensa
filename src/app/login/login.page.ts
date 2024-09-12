import { ɵnormalizeQueryParams } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionManager } from 'src/managers/SessionManager';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  constructor(private router: Router, private sessionManager: SessionManager) { }
    email: string ='';
    user: string = '';
    password: string = '';

  ngOnInit() {
  }

  onLoginButtonPressed() {
    
    if(this.sessionManager.performLogin(this.email, this.password)) {
      this.router.navigate(['/home'],{queryParams:{email: this.email}});
    } else {
      this.user=''
      this.password=''
      alert('Las credenciales ingresadas son inválidas.')
    }
  }

  onRegisterButtonPressed() {
    this.router.navigate(['/register'])
  }

}
