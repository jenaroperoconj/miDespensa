import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class SessionManager {
    private readonly userCredentials: { [key: string]: string } = {
        'email@gmail.com': 'password1',
        'email2@gmail.com': 'password2',
        'email3@gmail.com': 'password3',
    };

    performLogin(userEmail: string, password: string): boolean {
        const userPassword = this.userCredentials[userEmail];

        if (userPassword && userPassword === password) {
            return true;
        } else {
            return false;
        }
    }
    performLogout() {
        //TODO
    }
}