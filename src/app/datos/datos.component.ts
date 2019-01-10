import {
  Component,
  OnInit
} from '@angular/core';
import {
  PeticionServicio
} from '../service';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.css']
})
export class DatosComponent implements OnInit {
  public datos: {};
  public pago: number;
  public suma: number;
  public consumo: number;

  constructor(
    private _peticionesServices: PeticionServicio
  ) {
    this.suma = 0;
    this.pago = 0;
    this.consumo = 0;
  }

  ngOnInit() {
    this._peticionesServices.getDatos().subscribe(
      result => {
        this.datos = result['feeds'];
        console.log(this.datos);
        console.log('Se recupero los datos de una manera correcta');
        this.mostrarConsumo();
      },
      error => {
        console.log( < any > error);
      });
  }

  mostrarConsumo() {
    for (let i = 0; i < Object.keys(this.datos).length; i++) {
      if (this.datos[i]['field1'] != null) {
        this.suma += Number(this.datos[i]['field1']);
      }
    }
    this.consumo = Number((this.suma / (1000 * 120)).toFixed(5));
    this.pago = Number((this.suma * (1 / 750000)).toFixed(5));
  }
}
