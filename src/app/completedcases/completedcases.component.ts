import { Component, OnInit } from '@angular/core';

import { PatientdataService } from "../services/patientdata.service";

@Component({
  selector: 'app-completedcases',
  templateUrl: './completedcases.component.html',
  styleUrls: ['./completedcases.component.css']
})
export class CompletedcasesComponent implements OnInit {

  returnData: [patientJSON];
  highlightData;
  highlightDataKey;
  highlightDataItem;
  formattedDataCount =[];
  reducedData: [patientJSON];



  constructor(private data: PatientdataService) {
  
  }
  

  ngOnInit() { 

    var occurrence = function (array) {
      var result = {};
      if (array instanceof Array) { // Check if input is array.
          array.forEach(function (v, i) {
              if (!result[v]) { // Initial object property creation.
                  result[v] = [i]; // Create an array for that property.
              } else { // Same occurrences found.
                  result[v].push(i); // Fill the array.
              }
          });
      }
      return result;
  };

    this.data.getData().subscribe((res) => {
    this.returnData = res;

     //list uniques in order
     this.highlightData = this.returnData
      .map(function(pd) {return pd.service;})
      .filter (function (value, index, array) { 
        return array.indexOf (value) == index;
      });
      this.highlightData.sort();


      //-------------get numbers-------------------//
      this.highlightDataItem = this.returnData.map(function(pd) {return pd.service;});

      // console.log(this.highlightDataItem);

      //get tally
      this.highlightDataKey = occurrence(this.highlightDataItem);

      // console.log(this.highlightDataKey);
      //

      for (let index = 0; index < this.highlightData.length; index++) {
        this.formattedDataCount.push(this.highlightDataKey[this.highlightData[index]].length);
        // console.log(this.formattedDataCount);
      }
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
