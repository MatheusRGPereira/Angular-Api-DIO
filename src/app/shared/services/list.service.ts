import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export type ApiResponse = {
  info: [],
  results: [],
}

@Injectable({
  providedIn: 'root'
})
export class ListService {
  apiURL = 'https://rickandmortyapi.com/api/character';


  constructor(private httpClient: HttpClient) { }

  getList():Observable<ApiResponse> {
    return this.httpClient.get<ApiResponse>(this.apiURL);
  }
}