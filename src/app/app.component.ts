import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'LocalStorage';

  session:any;

  savedata() {
    let data = {id:1, name:"Raj",age:21}

    localStorage.setItem("Data",JSON.stringify(data));
  }

  loadData() {
    let data:any = localStorage.getItem("Data");
    this.session = JSON.parse(data);
  }
}
