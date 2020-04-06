import { Component, OnInit } from '@angular/core';
import { lorem } from 'faker';
import { GetWordService } from './get-word.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'typing';
  hidden = true;
  randomText = '';
  enteredText = '';
  input: string = '';


  constructor(public wordService: GetWordService){}

  reset(){
    this.wordService.getWord().subscribe(data => this.randomText = data[0]);
    this.enteredText = '';
  }

  setInput(value: string) {
      this.enteredText = value;
  }

  ngOnInit() {
    this.reset();
  }

}
