import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {RouterModule} from '@angular/router'
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { SiderbarComponent } from './siderbar/siderbar.component';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    UserloginComponent,
    MainpageComponent,
    SiderbarComponent,

  ],
  imports: [
    BrowserModule,
    AgGridModule.withComponents([]),
    RouterModule.forRoot([
      {
         path: 'userlogin',
         component: UserloginComponent
      },
      {
        path: 'mainpage',
        component: MainpageComponent
     }
   ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
