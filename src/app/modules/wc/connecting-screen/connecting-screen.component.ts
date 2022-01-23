
import { Component, ElementRef, Inject, Injectable, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatGridTile } from '@angular/material/grid-list';
import { Router } from '@angular/router';
import { Socket, SocketIoModule } from 'ngx-socket-io';

export interface callSettings {
  isCamEnable: boolean;
  isMicEnable: boolean;
  isChatEnable : boolean;
  isShareScreenEnable: boolean;
  isFullScreen: boolean;
}

@Component({
  selector: 'app-connecting-screen',
  templateUrl: './connecting-screen.component.html',
  styleUrls: ['./connecting-screen.component.scss']
})



export class ConnectingScreenComponent implements OnInit {

  activeCallSettings : callSettings = {
    isCamEnable : false,
    isMicEnable: false,
    isChatEnable: false,
    isShareScreenEnable: false,
    isFullScreen: false,
  }
  @ViewChild('tile') tile: ElementRef;
  // @ViewChild('remote') remote: ElementRef;
  // @ViewChild('three') one: ElementRef;
  // @ViewChild('four') four: ElementRef;
  // i: Number = 0;
  // streams: Array<Number> = [1,2,3,4]
  rpc: RTCPeerConnection [];
  pc: Map<String, RTCPeerConnection>;
  localStream: MediaStream;
  remoteStreams: MediaStream [] = [];
  // remoteStreams: Map<String, MediaStream>;
  desc: Map<String, RTCSessionDescription>;
  inboundStream: MediaStream = null;

  constructor(
    private socket: Socket,
    private router: Router,
    // private e: ElementRef,
    @Inject(MAT_DIALOG_DATA) public joinCode: String,
    ) {
    //@ts-ignore
    console.log("JOIOIIOINNNCODE", this.joinCode);

    this.socket.on('new-joining', async ( socketId ) => {
      if(!this.pc.get(socketId)) await this.createPeerConnection(socketId);
      const offer = await this.pc.get(socketId).createOffer(); 
      await this.pc.get(socketId).setLocalDescription(offer);
      this.socket.emit('offer', { to: socketId, desc: offer });
    });

    this.socket.on('offer',async (data) => {
        console.log(`An offer from ${data.from} has been recieved on ${new Date()}`);
        if(!this.pc.get(data.from)) await this.createPeerConnection(data.from);

        this.desc.set(data.from, data.desc);
        console.log('this.desc',this.desc);
        
        await this.handleOffer( data.from, data.desc );
    });

    this.socket.on('answer',async (data) => {
      console.log(`An answer from ${data.from} has been recieved on ${new Date()}`);
      this.desc.set(data.from, data.desc);
      await this.handleAnswer( data.from, data.desc );
    }); 

    this.socket.on('icecandidate',async (data) => {
      console.log(`A candidate from ${data.from} has been recieved on ${new Date()}`);
      if(this.desc.get(data.from)) this.handelIceCandidate( data.from, data.candidate );
    });

  }


  async ngOnInit(): Promise<void> {
    this.desc = new Map();
    this.pc = new Map();
    try{
      this.localStream = await navigator.mediaDevices.getUserMedia({audio: false, video: true});
      this.remoteStreams.push(this.localStream)
      
    } catch(e){
      console.error('Error in getting user media devices',e);
      return;
    }
    // await this.createPeerConnection(socketId);    
    this.socket.emit('join-me', { roomId: this.joinCode });
  }


  ngOnDestroy(){
    this.localStream.getTracks()[0].stop()
    this.remoteStreams.forEach(stream => stream.getTracks()[0].stop());
    this.pc.forEach(pc => pc.close());
    this.pc = null;
    this.router.navigate(['']);
  }



  async handleOffer(socketId: String, offer: RTCSessionDescription){
    if(!this.pc.get(socketId)) await this.createPeerConnection(socketId);
    console.log('handling ooofffffferrrrrrrrrr', this.pc.get(socketId).signalingState);
    
    if(this.pc.get(socketId).signalingState != 'stable'){
      await Promise.all([
        this.pc.get(socketId).setLocalDescription({type: 'rollback'}),
        this.pc.get(socketId).setRemoteDescription(offer)
      ]);
      return;

    }else{
      await this.pc.get(socketId).setRemoteDescription(offer);
    }

    try{
      const answer = await this.pc.get(socketId).createAnswer(); 
      await this.pc.get(socketId).setLocalDescription(answer);
    }catch(e){  
      console.log('ERROR: error in in creating answer and setting local description', e);
    }

    this.socket.emit('answer', {to: socketId, desc: this.pc.get(socketId).localDescription})

  }



  async handleAnswer(socketId, answer: RTCSessionDescription){    
    try{
      if(!this.pc.get(socketId)) await this.createPeerConnection(socketId);
      await this.pc.get(socketId).setRemoteDescription( answer );
    }catch(e){
      console.error('ERROR: error in handling answer', e) ;      
    }
  }

  async handelIceCandidate(socketId,icecandidate: RTCIceCandidate){
    // if(!this.pc.get(socketId)) await this.createPeerConnection(socketId);
    let candidate = new RTCIceCandidate(icecandidate);
    try{
      await this.pc.get(socketId).addIceCandidate(candidate);
    }catch(e){
      console.error('Error in adding ICE Candidate',e);
      return;
    }
  }



  async createPeerConnection(socketId) {
    this.pc.set(socketId, new RTCPeerConnection({}));

    /**
     * Add event listner and handler for the ICECandidate
     */
    this.pc.get(socketId).addEventListener('icecandidate', (event) => {
      if(event.candidate) this.socket.emit('icecandidate', {candidate: event.candidate, to: this.joinCode});
    });


    /**
     * Add event listner and handler for the negotiation
     */
    // this.pc.addEventListener('negotiationneeded',async (event) => {
    //   try {

    //       if(this.pc.signalingState != "stable"){
    //         return;
    //       }
    //       const offer = await this.pc.createOffer();
    //       await this.pc.setLocalDescription(offer);
    //       this.socket.emit('offer', { offer: this.pc.localDescription })
          
    //     }catch(e){
    //       console.log('error in creatng offer');
    //     }
    // });

    /**
     * Listen  and handle the event for incomming video stream
     */
    this.pc.get(socketId).addEventListener('track', (event) => {
      if(event.streams && event.streams[0]){
        this.remoteStreams.push(event.streams[0]);
        console.log('------Getting the event track2---->>>>>>>',event );

      } else {
        if(!this.inboundStream){

          this.inboundStream = new MediaStream();
          this.remoteStreams.push(this.inboundStream);
        }

        this.inboundStream.addTrack(event.track);
      }

    });


    // try{
    //   this.localStream = await navigator.mediaDevices.getUserMedia({audio: false, video: true});
    //   this.remoteStreams.push(this.localStream)
      
    // } catch(e){
    //   console.error('Error in getting user media devices',e);
    //   return;
    // }

    try{
      this.localStream.getTracks().forEach(track => this.pc.get(socketId).addTrack(track, this.localStream));
    }catch(e){
      console.error('Error in adding transciever');
      return;
    }
  }





  toggleCam(){
    return this.activeCallSettings.isCamEnable = !this.activeCallSettings.isCamEnable
  }
  toggleMic(){
    return this.activeCallSettings.isMicEnable = !this.activeCallSettings.isMicEnable
  }
  toggleWcChat(){
   
    return this.activeCallSettings.isChatEnable = !this.activeCallSettings.isChatEnable
  }

}
