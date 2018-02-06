import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  switchvals;
  color: string;
  constructor(){
    this.switchvals = [
      {
        "value": "ON",
        "color": "green",
      },
      {
        "value": "ON",
        "color": "green",
      },
      {
        "value": "ON",
        "color": "green",
      },
      {

        "value": "ON",
        "color": "green",
      }, 
      {
        "value": "ON",
        "color": "green",
      },
      {
        "value": "ON",
        "color": "green",
      },
      {
        "value": "ON",
        "color": "green",
      },
      {
        "value": "ON",
        "color": "green",
      },
      {
        "value": "ON",
        "color": "green",
      },
      {
        "value": "ON",
        "color": "green",
      }
    ]
  }

  changeValue(num: number){
    let value = this.switchvals[num].value;
    if (value == "ON"){
      this.switchvals[num].value = "OFF"
      this.switchvals[num].color = "red"    
    } else{
      this.switchvals[num].value = "ON"
      this.switchvals[num].color = "green"    
    }

    }

  }
