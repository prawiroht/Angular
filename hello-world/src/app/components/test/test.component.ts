import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  label:string = "Test Interpolation";
  public id = "myId";
  successClass = "text-success";
  hasError = true;
  messageClass = {
    "text-danger" : this.hasError,
    "text-success" : this.hasError
  }
  // public name = "Wiro";
  // onClick(event:any){
  //   console.log('hello ogya');
  //   this.name = "Malik"
  // }
  
  onClick(value:any){
    console.log(value);
    
  }
  
  public name ="";
  displayName = true;
  color = "blue";
  colors : string[] = ["red","blue","green","yellow"]

  constructor() { }

  ngOnInit(): void {
  }

}
