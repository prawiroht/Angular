import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'latihanAngular';
  agreeColor = ()=>{
    return (this.agreed > 0);
  };
  disagreeColor = () => {
    return (this.disagreed > 0);
  };
  agreed:number = 0;
  disagreed:number = 0;
  onVoted(vote:any){
    if(vote) this.agreed++;
    else this.disagreed++;
  }
  voters : string[] = ["malik", "galih", "luki", "akbar", "toto"];
}
