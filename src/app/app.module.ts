import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';

import { CaseComponent } from './case/case.component';
import { CasescontainerComponent } from './casescontainer/casescontainer.component';
import { CurrentcasesComponent } from './currentcases/currentcases.component';
import { CompletedcasesComponent } from './completedcases/completedcases.component';
import { NavbarComponent } from './navbar/navbar.component';

import { PatientdataService } from './services/patientdata.service';
import { StatuskeyComponent } from './statuskey/statuskey.component';
import { ServicetypesComponent } from './servicetypes/servicetypes.component';




@NgModule({
  declarations: [
    AppComponent,
    CaseComponent,
    CasescontainerComponent,
    CurrentcasesComponent,
    CompletedcasesComponent,
    NavbarComponent,
    StatuskeyComponent,
    ServicetypesComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    PatientdataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
