import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.scss']
})
export class JoinComponent implements OnInit {
  joinCode : any
  constructor() { }

  ngOnInit(): void {
  }
  cancel(){
  }
  onSubmitJoinCode(){
    console.log("join URL or CODE",this.joinCode)
  }
}
