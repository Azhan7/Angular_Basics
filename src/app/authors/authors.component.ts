import { AuthorserviceService } from './../authorservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

  title = "list of Authors";
  authors;
  constructor(service: AuthorserviceService) { 
    this.authors = service.returnAuthors();
  }

  ngOnInit(): void {
  }

}
