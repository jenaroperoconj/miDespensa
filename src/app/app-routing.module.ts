import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'splash',
    loadChildren: () => import('./splash/splash.module').then(m => m.SplashPageModule)
  },
  {
    path: '',
    redirectTo: 'splash',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then(m => m.RegisterPageModule)
  },
  {
    path: 'agregar-producto',
    loadChildren: () => import('./pages/agregar-producto/agregar-producto.module').then(m => m.AgregarProductoPageModule)
  },
  {
    path: 'lista-de-compras',
    loadChildren: () => import('./pages/lista-de-compras/lista-de-compras.module').then(m => m.ListaDeComprasPageModule)
  },
  {
    path: 'notificaciones',
    loadChildren: () => import('./pages/notificaciones/notificaciones.module').then(m => m.NotificacionesPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./pages/settings/settings.module').then(m => m.SettingsPageModule)
  },
  {
    path: 'mi-cuenta',
    loadChildren: () => import('./pages/mi-cuenta/mi-cuenta.module').then(m => m.MiCuentaPageModule)
  },
  {
    path: 'compartir-mi-despensa',
    loadChildren: () => import('./pages/compartir-mi-despensa/compartir-mi-despensa.module').then( m => m.CompartirMiDespensaPageModule)
  },
  {
    path: 'mi-despensa',
    loadChildren: () => import('./pages/mi-despensa/mi-despensa.module').then( m => m.MiDespensaPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
