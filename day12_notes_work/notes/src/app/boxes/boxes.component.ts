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
  hasOpenedABox= false;
  boxMockText = "";
  boxName = ""
  boxes = ["Box 1", "Box 2", "Box 3"];


  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.canOpenMoreBoxes = true;
    }, 3000);
  }

  onOpenBox() {
    this.hasOpenedABox = true;
    this.boxes.push(this.boxName);
    this.boxMockText ='You just opened a box called: ${this.boxName}'
  }
}
