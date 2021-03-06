import { Component } from '@angular/core';
import {MdDialogRef} from "@angular/material";

@Component({
    selector: 'app-confirm',
    templateUrl: './confirm.component.html',
    styles: [`
        .vex-theme-os.confirm{
            width:500px;
            
        }
    `]
})
export class ConfirmComponent {

    private _parameters;
    constructor(public dialogRef: MdDialogRef<ConfirmComponent>) {

    }
    get parameters() {
        return this._parameters;
    }

    set parameters(value) {
        this._parameters = value;
    }
    dialogKeyHandler(e, dialogRef){
        let code = (e.keyCode ? e.keyCode : e.which);
        console.log("in modality keyhandler",code);
        if(code === 13){
            dialogRef.close('ok');
        }
        if(code === 27){
            dialogRef.close(null);
        }
    }
}
