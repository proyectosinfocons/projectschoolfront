import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { EdicionusuarioComponent } from './edicionusuario/edicionusuario.component';
import { HorariosComponent } from './horarios/horarios.component';
import { CursosComponent } from './cursos/cursos.component';
import { CalificacionesComponent } from './calificaciones/calificaciones.component';


export const routes: Routes = [
    { path: 'inicio', component: InicioComponent},
    { path: 'usuario', component: EdicionusuarioComponent},
    { path: 'horario', component: HorariosComponent},
    { path: 'cursos', component: CursosComponent},
    { path: 'calificaciones', component: CalificacionesComponent},
    { path: 'login', component: LoginComponent}



]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]})
export class PagesRoutingModule { }