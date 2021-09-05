import { ConnectingScreenComponent } from './modules/wc/connecting-screen/connecting-screen.component';
import { SharedModule } from './sharedModules/shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PrimaryLayoutComponent } from './layouts/primary-layout/primary-layout.component';
import { RouterModule } from '@angular/router';

import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { environment } from 'src/environments/environment';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { WcdialogService } from './services/wc/wcdialog.service';
import { AlertService } from './services/alert/alert.service';
import { AuthService } from './services/auth/auth.service';
import { MatSnackBar, MatSnackBarRef } from '@angular/material/snack-bar';
import { QuickJoinLayoutComponent } from './layouts/quick-join-layout/quick-join-layout.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { QuickJoinLayoutClassicComponent } from './layouts/quick-join-layout-classic/quick-join-layout-classic.component';
import { JoinComponent } from './pages/join/join.component';
import { NewMeetingComponent } from './pages/new-meeting/new-meeting.component';
import { QuickHomeComponent } from './pages/quick-home/quick-home.component';
import { IonicModule } from '@ionic/angular';

const config: SocketIoConfig = { url: environment.wsUrl, options: { transports: ['websocket'] } };




@NgModule({
  declarations: [
    AppComponent,
    PrimaryLayoutComponent,
    QuickJoinLayoutComponent,
    QuickJoinLayoutClassicComponent,
    JoinComponent,
    NewMeetingComponent,
    QuickHomeComponent,
    ConnectingScreenComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DragDropModule,
    MatGridListModule,
    HttpClientModule,
    SharedModule,
    SocketIoModule.forRoot(config),
    IonicModule.forRoot(),
  ],
  exports:[
    SharedModule,
  ],
  


  bootstrap: [AppComponent]
})
export class AppModule { }
