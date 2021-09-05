import { Component, OnInit } from '@angular/core';
import { WcdialogService } from 'src/app/services/wc/wcdialog.service';

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.scss']
})
export class JoinComponent implements OnInit {
  joinCode : any
  constructor(
    private wcService: WcdialogService
  ) { }

  ngOnInit(): void {
  }
  cancel(){
  }
  onSubmitJoinCode(){
    this.wcService.openWcDialog(this.joinCode)
    console.log("join URL or CODE",this.joinCode)
  }
}
