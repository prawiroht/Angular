import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {
  title:string = "Child";
  constructor() { }
  clickCount :number = 0;
  onChangedEvent(count:any){
    console.log(count);
    this.clickCount = count;
  }

  ngOnInit(): void {
  }

}
