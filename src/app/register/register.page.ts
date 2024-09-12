import { ɵnormalizeQueryParams } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionManager } from 'src/managers/SessionManager';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private router: Router, private sessionManager: SessionManager) { }

  ngOnInit() {
  }

  onRegisterButtonPressed() {
    this.router.navigate(['/login'])
  }
}
