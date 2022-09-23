import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-business-details',
  templateUrl: './business-details.component.html',
  styleUrls: ['./business-details.component.scss']
})
export class BusinessDetailsComponent implements OnInit {
  data = {
    name: "Mary, Jason & Hodge of Attorney",
    domain: "www.mjhattorenys.com",
    gender: "Male",
    date_of_birth: new Date("06/08/1979"),
    phone_number: "+8654321234",
    location: "12 street, Silicon Valley, Avenue NE, Huntsville"
  }
  constructor() { }

  ngOnInit(): void {
  }

  returnZero() {
    return 0
}

}
