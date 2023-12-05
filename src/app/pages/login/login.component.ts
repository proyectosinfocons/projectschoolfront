import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import '../../../assets/login-animation.js';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario : string | undefined;
  clave : string | undefined;
  mensaje : string | undefined;
  error : string | undefined;

  constructor(

    private router: Router
    
    ) { }

  ngOnInit(): void {
  }

  iniciarSesion(){
   //   sessionStorage.setItem(environment.TOKEN_NAME, data.access_token);            
      this.router.navigate(['pages/inicio']);
  
  }

  ngAfterViewInit() {
    (window as any).initialize();
  }

}
