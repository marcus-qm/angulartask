import { Component, OnInit } from '@angular/core';


import { PatientdataService } from "../services/patientdata.service";

@Component({
  selector: 'app-case',
  templateUrl: './case.component.html',
  styleUrls: ['./case.component.css']
})
export class CaseComponent implements OnInit {
  returnData: [patientJSON];

  constructor(private data: PatientdataService) { }

  ngOnInit() {

    this.data.getData().subscribe((res) => {
      this.returnData = res;
    })
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
