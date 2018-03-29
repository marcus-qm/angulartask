import { Component, OnInit , EventEmitter, Output} from '@angular/core';


@Component({
  selector: 'app-servicetypes',
  templateUrl: './servicetypes.component.html',
  styleUrls: ['./servicetypes.component.css']
})
export class ServicetypesComponent implements OnInit {

  @Output() serviceToggled = new EventEmitter();

  message:string;

  constructor() { }

  ngOnInit() {
     
  }


  

  toggleService(e) {
    this.serviceToggled.emit(e);
  }

}
