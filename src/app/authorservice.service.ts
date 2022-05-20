import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AuthorserviceService {

  constructor() { }
  returnAuthors(){
    return ["Author1", "Author2", "Author3"];  
  }
}
