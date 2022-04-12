import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() childTitle:string = '';
  countNumber :number = 0;

  constructor() { }

  @Output() onChanged = new EventEmitter<number>()

  onPlus(count:number){
    count += 1000;
    this.countNumber= count;
    this.onChanged.emit(this.countNumber);
  }

  onMinus(count:number){
    count -= 1000;
    this.countNumber= count;
    this.onChanged.emit(this.countNumber);
  }

  ngOnInit(): void {
  }

}
