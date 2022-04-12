import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ganteng',
  templateUrl: './ganteng.component.html',
  styleUrls: ['./ganteng.component.css']
})
export class GantengComponent implements OnInit {
  name : string = "Ganteng banget";
  person = {'firstName' : 'Wiro', 'lastName' : 'Ganteng'}
  label : string = 'number';
  kalimat:string = "Malik itu sangat malik sekali."
  constructor() { }

  ngOnInit(): void {
  }

}
