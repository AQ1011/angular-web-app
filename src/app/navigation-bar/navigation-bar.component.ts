import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {

  events: string[] = [];
  opened: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu() {
    this.opened = !this.opened;
    console.log('hello')
  }
}
