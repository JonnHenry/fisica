import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()

export class PeticioServicion{
  private urlPeticion : string;
    constructor(
      public _http: HttpClient
    ){
      this.url="https://thingspeak.com/channels/669929/field/1.json";
    }

    getDatos() Observable<any>{
      return this._http.get(this.urlPeticion);
    }


}

