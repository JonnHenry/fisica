import { Component, OnInit } from '@angular/core';
import { PeticionServicio } from '../service';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.css']
})
export class DatosComponent implements OnInit {
  public datos: {};

  constructor(
    private _peticionesServices: PeticionServicio
  ) {}

  ngOnInit() {
    this._peticionesServices.getDatos().subscribe(
      result => {
        console.log(result);
        console.log('Se recupero los datos de una manera correcta');
    },
    error => {
      console.log(<any>error);
    });
  }
}
