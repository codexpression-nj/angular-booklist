import { Component } from '@angular/core';
import { Book, BookService } from '../../services/book.service';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent {
  books: Book[] = [];

  constructor(private bookService:BookService){

  }

  ngOnInit():void{
    this.bookService.getBooks().subscribe((data) =>{
      this.books = data
      console.log(data);
      
    })
  }

}
