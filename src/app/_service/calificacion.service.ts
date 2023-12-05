import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Calificaciones } from '../_model/calificaciones';

@Injectable({
  providedIn: 'root'
})
export class CalificacionService {
  private  url:string=`${environment.HOST}/horario`;
  constructor(private http: HttpClient) { }


  listar(){
    return this.http.get<Calificaciones[]>(this.url+`/calificaciones`);
  }


  listarPorIds(id: number){
    return this.http.get<Calificaciones>(`${this.url}/${id}`);
  }
  listarPorId(id: number){
    return this.http.get<Calificaciones>(`${this.url}/calificaciones/${id}`);
  }

}
