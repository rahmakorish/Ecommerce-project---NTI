import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { enviroment } from './../../../../enviroments/enviroment';
import { Observable } from 'rxjs';
import { IFAQ } from '../../models/faq.model';

@Injectable({
  providedIn: 'root'
})
export class FaqServices {
constructor( private _http:HttpClient){}
apiURL = enviroment.apiURL+'FAQ';

getQustions():Observable<IFAQ>{
  return this._http.get<IFAQ>(this.apiURL)
}

createQuestion(question:IFAQ){
return this._http.post(this.apiURL+'/createFAQ',question)
}

}
