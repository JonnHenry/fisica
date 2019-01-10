import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class PeticionServicio {
  private urlPeticion: string;
    constructor(
      public _http: HttpClient
    ) {
      this.urlPeticion = 'https://thingspeak.com/channels/672744/field/1.json';
    }

    getDatos() {
      return this._http.get(this.urlPeticion);
    }


}

