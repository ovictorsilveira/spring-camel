import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http : HttpClient) { }

  getCep(cep : string) {
    //return this.http.get('https://viacep.com.br/ws/' + cep + '/json/');
    return this.http.get(`https://viacep.com.br/ws/${cep}/json/`);
  }
  
  
}
