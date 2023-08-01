import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpEmpleoService {

  private url: string = environment.apiUrl

  constructor(private miHttp: HttpClient) { }

  postFormularioEmpleo(formulario: any) {
    return this.miHttp.post<string>(this.url + "empleo", formulario)
  }
}
