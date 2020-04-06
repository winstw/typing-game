import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GetWordService {
  url: string = 'https://random-word-api.herokuapp.com/word?number=1';

  constructor(private http: HttpClient) { }

  getWord(){
    return this.http.get(this.url);
    }

}


