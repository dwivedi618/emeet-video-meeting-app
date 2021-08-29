import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { ConnectingScreenComponent } from 'src/app/modules/wc/connecting-screen/connecting-screen.component';

@Injectable({
  providedIn: 'root'
})
export class WcdialogService {

  constructor(public dialog : MatDialog,private router : Router) { }

  openWcDialog(){
    const wcdialog = this.dialog.open(ConnectingScreenComponent,{
      width : '100vw',
      maxWidth : '100vw',
      maxHeight:'100vh',
      height : '100vh',
      disableClose : true,
      hasBackdrop : false
    })

    wcdialog.afterClosed().subscribe(close =>{
      // alert('close');
      this.router.navigate(['']);
    })
  }
}
