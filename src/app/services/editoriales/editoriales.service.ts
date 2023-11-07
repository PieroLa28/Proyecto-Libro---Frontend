import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EditorialesService {

  private API_SERVIDOR ="http://localhost:8080/api/editoriales";
  constructor(
    private httpClient: HttpClient
  ) { }

  public getallEditoriales():Observable<any>{
    return this.httpClient.get(`${this.API_SERVIDOR}/listarEditoriales`)
  }
}
