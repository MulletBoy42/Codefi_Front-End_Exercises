constructor() {
  this.isEmpty = Math.random() > 0.5;
}

getColor()
}


const boxnumber = 2;
let isEmpty = "false";

<p class="text-center">I am box number {{ boxnumber }}!</p>
<p>I am {{ isEmpty ? "empty" : "full" }}.</p>


import { getLocaleDateFormat } from "@angular/common";
import { Component } from "@angular/core";

@Component({
  selector: "app-box",
  templateUrl: "./box.component.html",
  styleUrls: ['./box.component.css']
})
export class BoxComponent {}
