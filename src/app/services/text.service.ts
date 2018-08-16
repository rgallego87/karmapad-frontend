import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TextService {

  private API_URL = environment.apiTextsURL;
  private text: any;

  constructor( private httpClient: HttpClient ) { }

  create(text: any): Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient.post(`${this.API_URL}/create`, text, options).toPromise();      
  }

  listAll(): any {
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(`${environment.apiBaseURL}/`, options).toPromise()
  }
}
