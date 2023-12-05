import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Cursos } from 'src/app/_model/cursos';
import { CursoService } from 'src/app/_service/curso.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  cursos: Cursos[] = [];  

  constructor(private cursoService : CursoService) { }

  ngOnInit(): void {
    this.cursoService.listar().subscribe(data => {
      this.cursos = data;
    });
  }

}
