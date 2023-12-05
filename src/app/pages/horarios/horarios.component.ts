import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-horarios',
  templateUrl: './horarios.component.html',
  styleUrls: ['./horarios.component.css']
})
export class HorariosComponent implements OnInit {
  @ViewChild('stepper')
  stepper!: MatStepper;

  isLinear!: boolean;
  primerFormGroup!: FormGroup;
  segundoFormGroup!: FormGroup;

  

  fechaSeleccionada: Date = new Date();
  maxFecha: Date = new Date();

  diagnostico!: string;
  tratamiento!: string;
  mensaje!: string;

  

  consultorios: number[] = [];
  consultorioSeleccionado: number = 0;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.segundoFormGroup = this.formBuilder.group({

    });
    this.listarConsultorios();
  }

  listarConsultorios() {
    for (let i = 1; i <= 100; i++) {      
      this.consultorios.push(i);
    }
  }

  seleccionarConsultorio(c: number) {
    this.consultorioSeleccionado = c;
  }

  

  

  

  limpiarControles() {

    this.diagnostico = '';
    this.tratamiento = '';

    this.fechaSeleccionada = new Date();
    this.fechaSeleccionada.setHours(0);
    this.fechaSeleccionada.setMinutes(0);
    this.fechaSeleccionada.setSeconds(0);
    this.fechaSeleccionada.setMilliseconds(0);
    this.consultorioSeleccionado = 0;
    this.mensaje = '';
    this.stepper.reset();
  }
}