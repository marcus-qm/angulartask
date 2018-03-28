import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PatientdataService {

  constructor(public http:Http) {

  }

  getData(){
    return this.http.get('http://www.mocky.io/v2/590212490f00006b18d2cb05')
    .map(res => res.json());
  }

}
