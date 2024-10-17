import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { Auth } from '@angular/fire/auth';
import { signOut } from 'firebase/auth';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class AppComponent {
  constructor(
    private auth: Auth, 
    private router: Router,
    private menuCtrl: MenuController,
  ) {}

  async navigateAndClose(route: string) {
    await this.menuCtrl.close('main-menu'); // Cierra el menú
    this.router.navigateByUrl(route); // Redirige a la ruta indicada
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
