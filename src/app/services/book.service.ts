import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

export interface Book {
  _id:number
  title: string;
  isbn: string;
  pageCount: number;
  publishedDate: {
    $date: string;
  };
  thumbnailUrl: string;
  shortDescription: string;
  longDescription: string;
  status: string;
  authors: string[];
  categories: string[];
}

@Injectable({
  providedIn: 'root'
})

export class BookService {

  private dataUrl = 'assets/data.json';  

  constructor(private http:HttpClient) { }

  getBooks():Observable<Book[]>{
    return this.http.get<Book[]>(this.dataUrl)
  }

  
}
