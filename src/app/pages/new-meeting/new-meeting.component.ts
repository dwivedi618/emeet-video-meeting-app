import { Component, OnInit } from '@angular/core';
import { WcdialogService } from 'src/app/services/wc/wcdialog.service';

@Component({
  selector: 'app-new-meeting',
  templateUrl: './new-meeting.component.html',
  styleUrls: ['./new-meeting.component.scss']
})
export class NewMeetingComponent implements OnInit {
  isJoining : boolean = false
  today = new Date()
  joinCode: String;
  constructor(
    private callDialogService : WcdialogService
  ) { }

  ngOnInit(): void {
    this.joinCode = 'abc-pqr-xyz'
    this.callDialogService.openWcDialog(this.joinCode)
  }

}
