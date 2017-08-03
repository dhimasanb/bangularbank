import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-circular',
  templateUrl: './circular.component.html',
  styleUrls: ['./circular.component.css']
})
export class CircularComponent implements OnInit {

  public happyText = 'Manager is on Vacation';

  public myTodos = [
    'Wash coffee mug',
    'Take a shower',
    'Say hi to the new hire'
  ];

  constructor() { }

  ngOnInit() {
    this.happyText = 'Manager is sick';
  }

  makeHappier() {
    this.happyText = 'Manager got fired';
  }

}
