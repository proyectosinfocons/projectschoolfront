import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import 'src/assets/login-animation.js';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit {

  usuario : string | undefined;
  clave : string | undefined;
  mensaje : string | undefined;
  error : string | undefined;

  constructor(

    private router: Router
    
    ) { }
  ngOnInit(): void {
  }



  ngAfterViewInit() {
    (window as any).initialize();
  }

}
