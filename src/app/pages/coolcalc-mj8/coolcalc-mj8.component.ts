import { Component, OnInit } from '@angular/core';

// export variables
import { libMJ8} from '../../../assets/coolcalc/javascript/libmj8';
import {myFunFactory} from '../../../assets/coolcalc/javascript/fun-factory';




@Component({
  selector: 'app-coolcalc-mj8',
  templateUrl: './coolcalc-mj8.component.html',
  styles: []
})
export class CoolcalcMJ8Component implements OnInit {

  constructor() { }

  ngOnInit(): void {

    //initializing CooCalc
    libMJ8.landingPage(myFunFactory); 
  }

}
