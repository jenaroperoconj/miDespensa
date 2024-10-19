import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule, MenuController } from '@ionic/angular';
import { Auth } from '@angular/fire/auth';
import { signOut } from 'firebase/auth';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
  ],
})
export class AppComponent {
  showLayout: boolean = true;
  
  constructor(
    private auth: Auth, 
    private router: Router,
    private menuCtrl: MenuController,
  ) {
    this.router.events.subscribe(() => {
      const currentRoute = this.router.url;
      this.showLayout = !(currentRoute.includes('login') || currentRoute.includes('register') || currentRoute.includes('add-product'));
    });
  }

  

  async navigateAndClose(route: string) {
    try {
      await this.menuCtrl.close('main-menu'); 
      await this.router.navigateByUrl(route); 
    } catch (error) {
      console.error('Error al navegar y cerrar menú:', error);
    }
  }

  async logout() {
    try {
      await signOut(this.auth);
      this.router.navigate(['/login']);
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  }
}
