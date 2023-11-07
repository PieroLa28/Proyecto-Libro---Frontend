import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {
  private API_SERVIDOR ="http://localhost:8080/api/categorias";
  constructor(
    private httpClient: HttpClient
  ) { }

  public getallCategorias():Observable<any>{
    return this.httpClient.get(`${this.API_SERVIDOR}/listarCategorias`)
  }
}

