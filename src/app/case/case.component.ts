import { Component, OnInit, Input } from '@angular/core';
 

import { PatientdataService } from "../services/patientdata.service";

@Component({
  selector: 'app-case',
  templateUrl: './case.component.html',
  styleUrls: ['./case.component.css']
})
export class CaseComponent implements OnInit {
  returnData: [patientJSON];
  @Input() childMessage: string;

  message:string;



  constructor(private data: PatientdataService) { }

  ngOnInit() {

     

    this.data.getData().subscribe((res) => {
      this.returnData = res;
    })
  }

  handleToggle(e) {
    console.log(e);
  }

}

interface patientJSON {
  dob: string,
  name: string,
  patientID: number,
  service: string,
  serviceID: number,
  statusKey: string
}
