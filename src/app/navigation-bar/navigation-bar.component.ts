import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {

  events: string[] = [];
  opened: boolean = true;
  showFiller: boolean = true;
  posts: any[]
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('https://www.reddit.com/r/Android/.json')
      .subscribe((Response:any) => {
        if(Response) {
          this.posts = Response.data.children;
          console.log(this.posts);
        }
      })
  }

  toggleMenu() {
    this.opened = !this.opened;
    // this.showFiller = !this.showFiller;
  }
}
