import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styles: []
})
export class ClasesComponent implements OnInit {
  alerta = 'alert-danger';
  loading = false;
  propiedades = {
    danger: true
  };
  constructor() { }

  ngOnInit(): void {
  }

  ejecutar(){
    this.loading = !this.loading;
    setTimeout(()=>this.loading = !this.loading, 3000);
  }

}
