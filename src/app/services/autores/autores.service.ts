import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AutoresService {
  private API_SERVIDOR ="http://localhost:8080/api/autores";

  constructor(
    private httpClient: HttpClient
  ) { }

  public getallAutores():Observable<any>{
    return this.httpClient.get(`${this.API_SERVIDOR}/listarAutores`)
  }
}
