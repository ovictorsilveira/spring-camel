import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  auth_token : string = '12f6cc4e67c7881b0c028d63f41bdd030083cbe0e5e1e4a1e9e87a3edc71fc70';
  url = `https://gorest.co.in/public-api/categories`;

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get(this.url);
  }

  getOne( id : number ){
    return this.http.get(`${this.url}/${id}`);

  }

  save (category : any){

    return this.http.post(this.url, category, this.getHeader() );
  }

  delete (id : number){

    return this.http.delete(`${this.url}/${id}`, this.getHeader() );
  }
  update (id : number, category : any){

    return this.http.patch(`${this.url}/${id}`, category, this.getHeader() );
  }

  private getHeader(){
    let headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth_token}`
    });

    return { headers : headers };
  }

}