import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class HttpNewsletterService {

  private url:string = environment.apiUrl

  constructor(private miHttp: HttpClient) { }

  postFormularioNewsletter(formulario: any) {
    return this.miHttp.post<string>(this.url + "newsletter",formulario)
  }
}
