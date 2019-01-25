import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  car = "./assets/kachow.jpeg";
  color = "white"

  changeColor = () => {
    console.log("whoo")
    let colors = ["red", "blue", "green", "yellow", "purple"];
    this.color = colors[Math.floor(Math.random() * 6)];
  };

}
