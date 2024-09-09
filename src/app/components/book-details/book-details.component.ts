import { Component } from '@angular/core';
import { Book, BookService } from '../../services/book.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-book-details',
  standalone: true,
  imports: [NgIf],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.css'
})
export class BookDetailsComponent {
  book: Book | undefined;

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private router: Router

  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.bookService.getBooks().subscribe((books: Book[]) => {
        this.book = books.find(book => book._id === +id);
        console.log(this.book);
      });
    }
  }

  goBack(): void {
    this.router.navigate(['/']);
  }
}
