import { WcdialogService } from './../../services/wc/wcdialog.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quick-join-layout',
  templateUrl: './quick-join-layout.component.html',
  styleUrls: ['./quick-join-layout.component.scss']
})
export class QuickJoinLayoutComponent implements OnInit {
  isJoining : boolean = false
  today = new Date()

  constructor(
    private callDialogService : WcdialogService
  ) { }

  ngOnInit(): void {
    // this.callDialogService.openWcDialog()

  }



 

}
