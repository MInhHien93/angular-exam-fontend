import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BookCreateComponent} from './books/book-create/book-create.component';
import {BookListComponent} from './books/book-list/book-list.component';
import {BookUpdateComponent} from './books/book-update/book-update.component';
import {BookDetailsComponent} from './books/book-details/book-details.component';


const routes: Routes = [
  {
    path: 'books',
    component: BookListComponent
  },
  {
    path: 'books/create',
    component: BookCreateComponent
  },
  {
    path: 'books/details/:id',
    component: BookDetailsComponent
  },
  {
    path: 'books/update/:id',
    component: BookUpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
