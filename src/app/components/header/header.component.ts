import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() menuClick = new EventEmitter()
  constructor() { }

  ngOnInit(): void {

  }

  openMenu() {
    this.menuClick.emit();
  }

}
