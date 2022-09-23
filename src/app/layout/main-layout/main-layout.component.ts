import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild('drawer') drawer:any

  openDrawer(){
    this.drawer.toggle()
  }
}
