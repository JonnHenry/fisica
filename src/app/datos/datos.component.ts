import { Component, OnInit } from '@angular/core';
import { PeticionServicio } from '../service';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.css']
})
export class DatosComponent implements OnInit {
  public datos: {};
  public consumo: number;

  constructor(
    private _peticionesServices: PeticionServicio
  ) {}

  ngOnInit() {
    this._peticionesServices.getDatos().subscribe(
      result => {
        this.datos = result['feeds'];
        console.log(this.datos);
        console.log('Se recupero los datos de una manera correcta');
        this.mostrarConsumo()
      },
    error => {
      console.log(<any>error);
    });
  }

  mostrarConsumo(){
    var suma = 0;
    for ( var i = 0 ; i < this.datos.length; i++) {
      if ( this.datos[i]['field1'] != null){
        suma += Number(this.datos[i]['field1']);
        console.log(suma)
      }
  }
  }
}
