import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { CaseComponent } from '../case/case.component';
import { StatuskeyComponent } from "../statuskey/statuskey.component";

import { ServicetypesComponent } from "../servicetypes/servicetypes.component";

@Component({
  selector: 'app-currentcases',
  templateUrl: './currentcases.component.html',
  styleUrls: ['./currentcases.component.css']
})
export class CurrentcasesComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {
  }

  handleToggle($event) {
    console.log($event);
  }

}
