import {Component, ViewContainerRef, Output} from '@angular/core';
import {MdDialog, MdDialogRef, MdDialogConfig} from "@angular/material";
import {TestdialogComponent} from "./widgets/dialogs/testdialog.component";
import {MessagingComponent} from "./widgets/messaging/messaging.component";
import {AppService} from "./app.service";
import {ViewChild} from "@angular/core/src/metadata/di";
// import {DCM4CHE} from "./constants/dcm4-che";
// declare var $:JQueryStatic;
// import * as vex from "vex-js";
// declare var vex: any;
// const vex = require("vex-js");
declare var DCM4CHE: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works2!';
    progressValue = 30;

    dialogRef: MdDialogRef<any>;

    @ViewChild(MessagingComponent) msg;
    // vex["defaultOptions"]["className"] = 'vex-theme-os';
    constructor( public viewContainerRef: ViewContainerRef, public dialog: MdDialog, public config: MdDialogConfig, public messaging:MessagingComponent){
    }

    progress(){
        let changeTo = function (t) {
            console.log("t",t);
            this.progressValue = t;
        }
        // let getValue = function(){
        //   return this.value;
        // }
        // let changeTo =  function(d){
        //     this.value = d;
        // }
        // let getVal = function () {
        //     return this.value;
        // }
        return{
            getValue:this.progressValue,
            setValue:(v)=>{
                this.progressValue = v;
            }
        }
    };

    onClick() {
        // this.dcm4che.elementName.forTag()
        console.log("dcm4chetest",DCM4CHE.elementName.forTag("00000000"));
        /*Dialogset*/
        this.config.viewContainerRef = this.viewContainerRef;

        this.dialogRef = this.dialog.open(TestdialogComponent, this.config);
        this.dialogRef.componentInstance.name = "testnamefromcomponent";
        this.dialogRef.componentInstance.nachname = "testnachname";
        this.dialogRef.afterClosed().subscribe(result => {
            console.log('result: ', result);
            this.dialogRef = null;
        });
        /*-Dialogset*/

        this.msg.setMsg({
            "title": "Warning",
            "text": "Attribute already exists!",
            "status": "warning",
            "timeout":50000
        });
        setTimeout(()=>{
            this.msg.setMsg({
                "title": "Info ",
                "text": "Info message!",
                "status": "info"
            });
        },500);
        // this.messaging.showMessageBlock = true;
        // this.messaging.change.emit(new MessagingComponent(true, "testmsg"));
        // this.messaging.showMessageBlock.emit(false);
        // console.log("showmessging=",this.messaging.showMessageBlock);
    }



    sidenavopen = false;
}


