import { Component, OnInit } from '@angular/core';

//export variables
import {libMJ8} from '../../../assets/coolcalc/javascript/libmj8';

@Component({
  selector: 'app-report-coolcalc-mj8',
  templateUrl: './report-coolcalc-mj8.component.html',
  styleUrls: ['./report-coolcalc-mj8.component.css']
})
export class ReportCoolcalcMJ8Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    //initializing the report
    libMJ8.MJ8Report();
  }

}
