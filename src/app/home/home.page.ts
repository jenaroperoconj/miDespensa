import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  email: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private menu: MenuController
  ) {}

  ngOnInit() {
    // Obtener los parámetros de la ruta
    this.route.queryParams.subscribe(params => {
      this.email = params['email'] || '';
    });
  }

  // Método para navegar a la página de login
  onLoginButtonPressed() {
    this.router.navigate(['/login']);
  }

  // Método para cerrar el menú lateral
  closeMenu() {
    this.menu.close();
  }
}
