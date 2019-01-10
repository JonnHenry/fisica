import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class PeticionServicio {
  private urlPeticion: string;
    constructor(
      public _http: HttpClient
    ) {
      this.urlPeticion = 'https://api.thingspeak.com/channels/672744/feeds.json?api_key=LF2GWXRJ476LELYW';
    }

    getDatos() {
      return this._http.get(this.urlPeticion);
    }


}

