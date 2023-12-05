import { ChangeDetectorRef, Component, HostBinding, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';

import { MediaMatcher } from '@angular/cdk/layout';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  

  mobileQuery: MediaQueryList;

  menuNav = [
    {name: "Inicio", route: "home", icon: "home"},
    {name: "Categorías", route: "category", icon: "category"},
    {name: "Productos", route: "home", icon: ""},
    {name: "Cerrar sesiòn", route: "", icon: ""}
  ]

  constructor(media: MediaMatcher
    ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    
  }
  ngOnInit(): void {
  }





}
