import {Injectable, OnInit, ViewContainerRef} from '@angular/core';
import {MessagingComponent} from "./widgets/messaging/messaging.component";
import {Http} from "@angular/http";
import {Observer, Observable, Subject} from "rxjs";
import {User} from "./models/user";
import * as _ from "lodash";
import {ViewChildren, ViewChild} from "@angular/core/src/metadata/di";
import {ConfirmComponent} from "./widgets/dialogs/confirm/confirm.component";

@Injectable()
export class AppService implements OnInit{
    private _user:User;
    // @ViewChild(MessagingComponent) msg;

    constructor(public $http:Http) {
    }
    private _isRole = function(role){
        if(this.user){
            if(this.user.user === null && this.user.roles.length === 0){
                return true;
            }else{
                if(this.user.roles && this.user.roles.indexOf(role) > -1){
                    return true;
                }else{
                    return false;
                }
            }
        }else{
            if(role === "admin"){
                return false;
            }else{
                return true;
            }
        }
    };

    // Observable string sources
    private setMessageSource = new Subject<string>();
    private createPatientSource = new Subject<string>();

    // Observable string streams
    messageSet$ = this.setMessageSource.asObservable();
    createPatient$ = this.createPatientSource.asObservable();
    // Service message commands
    setMessage(msg: any) {
        this.setMessageSource.next(msg);
    }
    createPatient(patient:any){
        this.createPatientSource.next(patient);
    }

    // setMsg(msg){
    //     console.log("in appservice",msg);
    //     this.msg.setMsg(msg);
    // }
    getUserInfo():Observable<User>{
        return this.$http.get("/dcm4chee-arc/ui/rs/realm")
            .map(res => {
                console.log("in map1", res);
                let resjson;
                try {
                    resjson = res.json();
                } catch (e) {
                    resjson = res;
                }
                return resjson;
            });
    }
    get user(): any {
        console.log("ingetuser");
        return this._user;
    }

    set user(value: any) {
        console.log("user set",value);
        this._user = value;
    }

    get isRole(): (role)=>boolean {
        return this._isRole;
    }

    set isRole(value: (role)=>boolean) {
        this._isRole = value;
    }

    ngOnInit(): void {
        console.log("in appservice on init before hhtp");
    }
    // getUserObservable():Observable<User>{
    //     return Observable.create(()=>{
    //         return this._user;
    //     })
    // }
    // setMessag(show, msg){
    //     this.messaging.showMessageBlock = show;
    //     this.messaging.msg = msg;
    // }

/*    confirm(confirmparameters){
        this.config.viewContainerRef = this.viewContainerRef;
        this.dialogRef = this.dialog.open(ConfirmComponent, this.config);
        this.dialogRef.componentInstance.parameters = confirmparameters;
        return this.dialogRef;
    }*/
}
