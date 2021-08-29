import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrimaryLayoutComponent } from './layouts/primary-layout/primary-layout.component';
import { QuickJoinLayoutClassicComponent } from './layouts/quick-join-layout-classic/quick-join-layout-classic.component';
import { QuickJoinLayoutComponent } from './layouts/quick-join-layout/quick-join-layout.component';
import { JoinComponent } from './pages/join/join.component';
import { NewMeetingComponent } from './pages/new-meeting/new-meeting.component';
import { QuickHomeComponent } from './pages/quick-home/quick-home.component';

const routes: Routes = [
  {
    path : '',component : QuickJoinLayoutComponent,
    children : [
      {  path : '',component : QuickHomeComponent } ,
      {  path : 'join',component : JoinComponent } ,
      {  path : 'newmeeting',component : NewMeetingComponent } 

    ]
    // path : '',component : QuickJoinLayoutClassicComponent,


  },

  { path : 'auth' ,loadChildren : ()=> import('./modules/auth/auth.module').then( m => m.AuthModule)},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
