import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { GetUserResponse } from '../types/product';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = "https://dummyjson.com/products/"

  constructor(private http: HttpClient) { }


  getProducts(): Observable<GetUserResponse> {
    return this.http.get<GetUserResponse>(this.apiUrl);
  }

}

