import { Component, OnInit, EventEmitter, Output, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
  encapsulation:ViewEncapsulation.Emulated  
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated=new EventEmitter<{serverName:string, serverContent:string}>();  //event emiter is obj to emit evnts
  @Output() blueprintCreated=new EventEmitter<{serverName:string, serverContent:string}>(); 
  //above propterties are created ie from cockpit decorator in app componet events
  // newServerName:string=""; //1 removed bcz we are given reference to input not ngmodel binding
  // newServerContent:string=""; // comnted aand added below refrence
  // @ViewChild('serverContentInput', {static: false}) serverContentInput; //this is of type element
  @ViewChild('serverContentInput', {static: false}) serverContentInput:ElementRef ; 
  constructor() { }

  ngOnInit() {
  }
  onAddServer(someinpt:HTMLInputElement){
    // console.log(this.serverContentInput);
    this.serverCreated.emit({
      serverName:someinpt.value,
      serverContent:this.serverContentInput.nativeElement.value
    })
    // console.log(lid)//old 1
    // this.serverCreated.emit({  //old 2
    //   // serverName:this.newServerName, // here also removed and ref   old 1
    //   serverName:lid.value, //old 2
    //   serverContent:this.newServerContent //old 2
    // }) //old 2
    // this.dataa.push({  //old 0
    //   name:this.newServerName,//old 0
    //   desc:this.newServerContent,//old 0
    //   type:"server"//old 0
    // });

  }
  onAddBluprint(someinpt:HTMLInputElement){
    this.blueprintCreated.emit({
      serverName:someinpt.value,
      serverContent:this.serverContentInput.nativeElement.value
    })
    // this.blueprintCreated.emit({ //old 2
    //   // serverName:this.newServerName, //old 1
    //   serverName:lid.value,
    //   serverContent:this.newServerContent
    // })
    // this.dataa.push({ //old 0
    //   type:'blue',
    //   name:this.newServerName,
    //   desc:this.newServerContent
    // })
  }
}
