import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{



  // session:any;

  // savedata() {
  //   let data = {id:1, name:"Raj",age:21};

  //   localStorage.setItem("Data",JSON.stringify(data));
  // };

  // loadData() {
  //   let data:any = localStorage.getItem("Data");
  //   this.session = JSON.parse(data);
  // }


  tDate:string = "";
  tTime:string = "";
  tTask:string = "";
  tasks = new Array();

  ngOnInit(): void {
    this.tasks = JSON.parse(localStorage.getItem("Tasks") || '[]');
  }

  save(){
    if(this.tDate == ""){
      alert("Enter Date");
      return;
    }

    if(this.tTime == ""){
      alert("Enter Date");
      return;
    }

    if(this.tTask == ""){
      alert("Enter Date");
      return;
    }

    let task = {date:this.tDate,time:this.tTime,task:this.tTask};
    this.tasks = JSON.parse(localStorage.getItem("Tasks") || '[]');
    this.tasks.push(task);
    localStorage.setItem("Tasks",JSON.stringify(this.tasks));

  }

}
