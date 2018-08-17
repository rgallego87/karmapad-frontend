import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TextService {

  private API_URL = environment.apiURL;
  // private text: any;
  // private id: any;

  constructor( private httpClient: HttpClient ) { }

  create(text: any): Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient.post(`${this.API_URL}/texts/create`, text, options).toPromise();      
  }

  listAll(): any {
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(`${this.API_URL}/`, options).toPromise();
  }

  getAllbyUser(): any {
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(`${this.API_URL}/texts/`, options).toPromise();
  }
}
