import { Component, NgZone, OnInit } from '@angular/core';

// export variables
import  { libMJ8 } from  '../../../assets/coolcalc/javascript/libmj8.js';
import { myFunFactory } from '../../../assets/coolcalc/javascript/fun-factory.js';


@Component({
  selector: 'app-coolcalc-mj8',
  templateUrl: './coolcalc-mj8.component.html',
  styles: []
})
export class CoolcalcMJ8Component implements OnInit {

  constructor( private ngZone: NgZone) { }

  ngOnInit(): void {
    this.ngZone.runOutsideAngular(() => {  
      //initializing CooCalc
      libMJ8.landingPage(myFunFactory); 
    });
  } 

}
