import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { NuevoComponent } from './pages/login/nuevo/nuevo.component';
import { RecuperarComponent } from './pages/login/recuperar/recuperar.component';
import { EdicionusuarioComponent } from './pages/edicionusuario/edicionusuario.component';
import { HorariosComponent } from './pages/horarios/horarios.component';
import 'src/assets/login-animation.js';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'nuevo',
    component: NuevoComponent
  },
  {
    path: 'recuperar',
    component: RecuperarComponent
  },
  {
    path: 'usuario',
    component: EdicionusuarioComponent
  },
  {
    path: 'horario',
    component: HorariosComponent
  },
  {
    path: 'pages',
    component: LayoutComponent,
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
