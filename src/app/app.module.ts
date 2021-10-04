import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component'; 
import {MatIconModule} from '@angular/material/icon'; 
import {MatButtonModule} from '@angular/material/button';  
import {MatCardModule} from '@angular/material/card'; 
import {MatGridListModule} from '@angular/material/grid-list'; 
import {MatSidenavModule} from '@angular/material/sidenav';  
import {MatListModule} from '@angular/material/list'; 
import {MatDividerModule} from '@angular/material/divider';
import { HeaderComponent } from './components/header/header.component';
import { GeneratedNavComponent } from './generated-nav/generated-nav.component';
import { LayoutModule } from '@angular/cdk/layout'; 
import { HttpClientModule } from '@angular/common/http';
import { PostComponent } from './components/post/post.component';
import { LoginComponent } from './components/login/login.component'; 
import {MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field'; 

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    HeaderComponent,
    GeneratedNavComponent,
    PostComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatSidenavModule,
    MatListModule,
    MatDividerModule,
    LayoutModule,
    MatFormFieldModule
  ],
  providers: [
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'fill'}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
