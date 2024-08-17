import { Routes } from '@angular/router';
import { BookListComponent } from './components/book-list/book-list.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';

export const routes: Routes = [
    { path: 'books', component: BookListComponent },
    { path: '', redirectTo: '/books', pathMatch: 'full' },
  { path: 'book/:id', component: BookDetailsComponent }
];
