
import { WcdialogService } from './../../services/wc/wcdialog.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quick-join-layout-classic',
  templateUrl: './quick-join-layout-classic.component.html',
  styleUrls: ['./quick-join-layout-classic.component.scss']
})
export class QuickJoinLayoutClassicComponent implements OnInit {
  isJoining : boolean = false
  today = new Date()
  quickPages = [
    { id : 1 , name : 'home' ,isActive :true },
    { id : 2 , name : 'join' ,isActive :false },
    { id : 3 , name : 'newmeeting' ,isActive :false },
  ]
  constructor(
    private callDialogService : WcdialogService
  ) { }

  ngOnInit(): void {
    // this.callDialogService.openWcDialog()
    this.isPageActive(1);
  }
  isPageActive(id){
    for(let i=0;i<this.quickPages.length;i++){
      if((this.quickPages[i].id == id) && this.quickPages[i].isActive){
        return true
      }
    }
  }
  cancel(){
    this.quickPages.forEach(quickPage =>{
      if(quickPage.name == 'home'){
        quickPage.isActive = true
      }else{
        quickPage.isActive = false
      }
    })
  }
  openQuickPage(pageName){
    for(let i=0;i<this.quickPages.length;i++){
      if(this.quickPages[i].name == pageName){
        this.quickPages[i].isActive = true;
       
      }else{
        this.quickPages[i].isActive = false
      }
    }
    
    console.log(this.quickPages)
  }

  onSubmitJoinCode(){

  }

}

