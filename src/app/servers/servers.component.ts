import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = "No server created";
  serverName = "TestServer";
  serverCreated = false;
  servers = ['Testserver', 'Testserver 2'];


  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
   }

  ngOnInit() {
  }

  onUpdateServerName(event: any)
  {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
  onCreateServer()
  {
    this.servers.push(this.serverName);
    this.serverCreated = true;
    this.serverCreationStatus = "server was created Name is " + this.serverName;
  }
}
