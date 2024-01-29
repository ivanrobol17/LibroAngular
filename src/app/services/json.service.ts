import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Libro } from '../domain/Libro';

@Injectable({
  providedIn: 'root'
})
export class JsonService {
  url : string = "https://jsonplaceholder.typicode.com/todos/"
  constructor(public httpClient:HttpClient) { }
  getJson():Observable<Libro[]>{
    return this.httpClient.get<Libro[]>(this.url)
  }
  getLibroJson(id:number):Observable<Libro[]>{
    return this.httpClient.get<Libro[]>(this.url+id)
  }
  deleteLibroJson(id:number):Observable<Libro[]>{
    return this.httpClient.delete<Libro[]>(this.url+id)
  }
  postLibroJson(libro:Libro):Observable<Libro[]>{
    return this.httpClient.post<Libro[]>(this.url, libro)
  }
}
