import { Component,Inject, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSidenav } from '@angular/material/sidenav';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Calificaciones } from 'src/app/_model/calificaciones';
import { CalificacionService } from 'src/app/_service/calificacion.service';
import { SideNavService } from 'src/app/_service/side-nav.service';

@Component({
  selector: 'app-calificaciones',
  templateUrl: './calificaciones.component.html',
  styleUrls: ['./calificaciones.component.css']
})
export class CalificacionesComponent implements OnInit {
  
  
  cursonombre:String | undefined;
  descripciondelcurso:String | undefined;
  creditosdelcurso:String | undefined;
  totalRecords = 0;

  dataSource!: MatTableDataSource<Calificaciones>;
  calificacion: Calificaciones = new Calificaciones;
  calificaciones: Calificaciones[] = [];  
  displayedColumns = ['id', 'nota', 'observacion'];
  length = 1000;
  pageSize = 10;
  pageIndex = 0;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  dataSourceWithPageSize = new MatTableDataSource<Calificaciones>;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

  constructor(
    private dialog: MatDialog,
    private sideNavService: SideNavService,
    private snackBar: MatSnackBar,
    private calificacionService : CalificacionService
  ) { }

  ngOnInit(): void {
    this.calificacionService.listar().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.calificaciones=data;

    });
 

  }

  open(e: any,row: any) {
    
    e.toggle();
    this.calificacion=row;
  
    this.cursonombre=row.curso.nombre;
    this.descripciondelcurso=row.curso.descripcion;
    this.creditosdelcurso=row.curso.creditos;
    console.log("Se selecciono este registro "+this.cursonombre);
  }
 
  
  pageChangeEvent(event: PageEvent) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
}


ngAfterViewInit() {
  this.dataSource = new MatTableDataSource<Calificaciones>;
}
}