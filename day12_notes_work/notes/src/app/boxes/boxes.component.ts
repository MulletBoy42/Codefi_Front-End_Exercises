let canOpenMoreBoxes = false;
const boxMockText = "You should open a box man.";
const boxName = "Default Box";
let haveOpenedABox = false;
//...
onOpenBox() {
  //...
  haveOpenedABox = true;
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boxes',
  templateUrl: './boxes.component.html',
  styleUrls: ['./boxes.component.css']
})
export class BoxesComponent implements OnInit {
  canOpenMoreBoxes = false;
  boxMockText = "You haven't opened a box in a while";

  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.canOpenMoreBoxes = true;
    }, 3000);
  }

  onOpenBox() {
    this.boxMockText ='You just opened a box called: ${this.boxName}'
  }
}
