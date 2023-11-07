import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {
  private API_SERVIDOR ="http://localhost:8080/api/libros";
  constructor(
    private httpClient: HttpClient
  ) { }

  public getallLibros():Observable<any>{
    return this.httpClient.get(`${this.API_SERVIDOR}/listarLibros`)
  }

  public guardarLibro(libro:any):Observable<any>{
    return this.httpClient.post(`${this.API_SERVIDOR}/insertarLibros`,libro)
  }

  public eliminarLibro(id:any):Observable<any>{
    return this.httpClient.delete(`${this.API_SERVIDOR}/eliminarLibro/`+id)
  }



}
