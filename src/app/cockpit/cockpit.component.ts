import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from "@angular/core";

@Component({
  selector: "app-cockpit",
  templateUrl: "./cockpit.component.html",
  styleUrls: ["./cockpit.component.css"]
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  @Output("bpCreated") blueprintCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  @ViewChild('serverContentInput', { static: false }) serverContentInput: ElementRef;
  newServerName = "";
  newServerContent = "";
  constructor() {}
  ngOnInit() {}
  onAddServer() {
    this.serverCreated.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent
    });
  }
  onAddBlueprint() {
    this.blueprintCreated.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent
    });
  }


  // code with local reference on html element
  // onAddBlueprint(nameinput: HTMLInputElement) {
  //   this.blueprintCreated.emit({
  //     serverName: nameinput.value,
  //     serverContent: this.newServerContent
  //   });
  // }

// code to access html element value using @ViewChild
  // onAddBlueprint(nameInput: HTMLInputElement) {
  //   this.blueprintCreated.emit({
  //     serverName: nameInput.value,
  //     serverContent: this.serverContentInput.nativeElement.value
  //   });
  // }




}
