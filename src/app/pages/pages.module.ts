import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PagesRoutingModule } from './pages-routing.module';
import { MaterialModule } from '../material/material.module';
import { LayoutComponent } from './layout/layout.component';
import { InicioComponent } from './inicio/inicio.component';
import { NuevoComponent } from './login/nuevo/nuevo.component';
import { RecuperarComponent } from './login/recuperar/recuperar.component';
import { EdicionusuarioComponent } from './edicionusuario/edicionusuario.component';
import { HorariosComponent } from './horarios/horarios.component';
import { CursosComponent } from './cursos/cursos.component';
import { CalificacionesComponent } from './calificaciones/calificaciones.component';
import 'src/assets/login-animation.js';
import { SidenavComponent } from './calificaciones/sidenav/sidenav.component';

@NgModule({
    imports: [
        MaterialModule,
        CommonModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule,
        
        PagesRoutingModule
    ],
    exports: [],
    declarations: [
        LayoutComponent,
        InicioComponent,
        NuevoComponent,
        RecuperarComponent,
        EdicionusuarioComponent,
        HorariosComponent,
        CursosComponent,
        CalificacionesComponent,
        SidenavComponent
  ],
    providers: [],
})
export class PagesModule { }
