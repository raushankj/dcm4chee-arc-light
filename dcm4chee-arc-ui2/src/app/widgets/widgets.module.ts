import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetsComponent } from './widgets.component';
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {MdDialogConfig} from "@angular/material";
import { MessagingComponent } from './messaging/messaging.component';
import {EditPatientComponent} from "./dialogs/edit-patient/edit-patient.component";
import { EditMwlComponent } from './dialogs/edit-mwl/edit-mwl.component';
import { CopyMoveObjectsComponent } from './dialogs/copy-move-objects/copy-move-objects.component';
import { ConfirmComponent } from './dialogs/confirm/confirm.component';
import { EditStudyComponent } from './dialogs/edit-study/edit-study.component';


@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
    ],
    declarations: [WidgetsComponent],
    exports:[WidgetsComponent],
    providers: [MdDialogConfig]
})
export class WidgetsModule { }
export const WidgetsComponents = [ MessagingComponent,EditPatientComponent, EditMwlComponent, EditStudyComponent, CopyMoveObjectsComponent, ConfirmComponent];
