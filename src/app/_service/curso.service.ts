import { Injectable } from '@angular/core';
import { GenericService } from './generic.service';
import { Cursos } from '../_model/cursos';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CursoService {
    private  url:string=`${environment.HOST}/curso`;

  constructor(private http: HttpClient) {}

  listar(){
    return this.http.get<Cursos[]>(this.url+`/cursos`);
  }

}
