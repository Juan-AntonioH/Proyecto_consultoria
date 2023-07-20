import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class HttpContactoService {
  private url:string = environment.apiUrl

  constructor(private miHttp: HttpClient) { }

  postFormularioContactos(formulario: any) {
    return this.miHttp.post<string>(this.url + "contacto",formulario)
  }
}
