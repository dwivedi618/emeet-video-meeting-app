import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Socket } from 'ngx-socket-io';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment'
import { OutgoingMessage, IncommingMessage } from '../../models/message.model'

@Injectable({
    providedIn: 'root'
})
export class CallService {
    
    ICECandidate: Subject<any> = new Subject<any>();
    desc: Subject<any> = new Subject<any>();

    constructor(private socket: Socket, private http: HttpClient) {

        this.socket.on('icecandidate',async (data) => {
            console.log(`A new candidate:${data} has been recieved on ${new Date()}`);
            this.ICECandidate.next(data);
        });

        this.socket.on('desc',async (data) => {
            console.log(`A new offer:${data} has been recieved on ${new Date()}`);
            this.desc.next(data);
        });
    }

    peerConnectionHandshaking(type: string, msg: any){
        console.log(`A message:${msg} of type ${type} has been sent on ${new Date()}`);        
        this.socket.emit(type, msg);
    }

    joinRoom(roomId){
        this.socket.emit('join', roomId);
    }

}