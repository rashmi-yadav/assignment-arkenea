import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-items',
  templateUrl: './navigation-items.component.html',
  styleUrls: ['./navigation-items.component.scss']
})
export class NavigationItemsComponent implements OnInit {
  @Input() direction!: 'row'|'column'
  @Input() drawer:any
  constructor() { }

  ngOnInit(): void {
  }

}
