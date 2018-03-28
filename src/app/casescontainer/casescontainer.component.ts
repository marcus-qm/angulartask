import { Component, OnInit } from '@angular/core';

import { CompletedcasesComponent } from "../completedcases/completedcases.component";
import { CurrentcasesComponent } from "../currentcases/currentcases.component";

@Component({
  selector: 'app-casescontainer',
  templateUrl: './casescontainer.component.html',
  styleUrls: ['./casescontainer.component.css']
})
export class CasescontainerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
