import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Book {
  author: string;
  country: string;
  imageLink: string;
  language: string;
  link: string;
  pages: number;
  title: string;
  year: number;
}

@Injectable({
  providedIn: 'root'
})

export class BookService {

  private dataUrl = './data.json';  

  constructor(private http:HttpClient) { }

  getBooks():Observable<Book[]>{
    return this.http.get<Book[]>(this.dataUrl)
  }
}
