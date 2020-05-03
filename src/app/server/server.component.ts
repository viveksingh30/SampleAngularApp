import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  // styleUrls: ['./server.component.css']
  // inline style
  styles: [`
    .online {
      color: white;
    }
  `]
})
export class ServerComponent implements OnInit {
  serverId: number = 2;
  serverStatus: string = "online";
  constructor() {
    this.serverStatus  = Math.random() > 0.5 ? 'online' : 'offline';
    this.serverId = Math.random() > .5 ? 2:4;
  }
  ngOnInit() {
  }
  getserverStatus()
  {
    return this.serverStatus;
  }
  getColor()
  {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
}
