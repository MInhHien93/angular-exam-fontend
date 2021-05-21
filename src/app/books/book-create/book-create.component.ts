import { Component, OnInit } from '@angular/core';
import {BookService} from '../service/book.service';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {Book} from '../model/book';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent implements OnInit {
  book:  Book = {};
  constructor(private bookService: BookService,
              private router: Router) { }

  ngOnInit() {
  }

  addNewBook(ngForm: NgForm) {
    let book: Book = {
      id: ngForm.value.id,
      title: ngForm.value.title,
      author: ngForm.value.author,
      description: ngForm.value.description
    };
    this.bookService.addBook(book).subscribe(book =>{
      ngForm.reset();
    },
      error => {
        console.log(error);
      })
    this.router.navigate(['/books']);
  }

}
