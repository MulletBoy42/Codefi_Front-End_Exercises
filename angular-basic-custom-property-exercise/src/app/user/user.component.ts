import { Component, , Input, onInit } from '@angular/core'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() myName: string = ""

  constructor() { }

  ngOnInit(): void {

  }
}
