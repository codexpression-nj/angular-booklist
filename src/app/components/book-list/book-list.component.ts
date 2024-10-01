import { Component } from '@angular/core';
import { Book, BookService } from '../../services/book.service';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [NgFor,NgIf,NgClass],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.sass'
})
export class BookListComponent {
  books: Book[] = [];
  selectedBook: Book | null = null; 

  constructor(private bookService:BookService,private router: Router){

  }
  ngOnInit():void{
    this.bookService.getBooks().subscribe((data) =>{
      this.books = data
      console.log(data);
    })
  }
  selectBook(book: Book): void {
    this.selectedBook = book;
  }
  goToBookDetail(book: Book): void {
    this.router.navigate(['/book', book._id]);
  }
}
