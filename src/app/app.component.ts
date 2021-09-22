import { Component, ViewChild } from '@angular/core';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  title = 'web-app';

  @ViewChild(NavigationBarComponent)
  navigationBarComponent: NavigationBarComponent;

  toggleMenu() {
    this.navigationBarComponent.toggleMenu()
    console.log('pls')
  }

}
