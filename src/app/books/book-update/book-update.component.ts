import {Component, OnInit} from '@angular/core';
import {BookService} from '../service/book.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Book} from '../model/book';

@Component({
  selector: 'app-book-update',
  templateUrl: './book-update.component.html',
  styleUrls: ['./book-update.component.css']
})
export class BookUpdateComponent implements OnInit {
  bookId = -1;
  bookUpdate: Book = {};

  constructor(private bookService: BookService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.bookId = +paramMap.get('id');
      this.bookService.getBookById(this.bookId).subscribe(book =>{
        this.bookUpdate = book;
      },
        error => {
        console.log(error);
        })
    });
  }

  updateBook(ngForm) {
    let bookUpdate: Book = {
      id: ngForm.value.id,
      title: ngForm.value.title,
      author: ngForm.value.author,
      description: ngForm.value.description
    };
    this.bookService.updateBook(bookUpdate).subscribe(book =>{
        ngForm.reset();
      },
      error => {
        console.log(error);
      })
    this.router.navigate(['/books']);
  }

  ngOnInit() {
  }

}
