import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.scss']
})
export class HelloWorldComponent implements OnInit {
  mytest = 'abcdef';
  mynumber = 1234;
  myarray = [123,'abcd', 456 ,'efgh'];

  constructor() { }

  ngOnInit(): void {
  return;
  }

  getText(): string {
    return `${this.mytest} ${this.mynumber}` ;
  }

}
