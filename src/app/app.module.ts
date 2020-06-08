import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {RouterModule} from '@angular/router'
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { SiderbarComponent } from './siderbar/siderbar.component';
import { AgGridModule } from 'ag-grid-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { ModalComponent } from './components/modal/modal.component';

import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { AddComponent } from './add/add.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    UserloginComponent,
    MainpageComponent,
    SiderbarComponent,
    ModalComponent,
    AddComponent

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AgGridModule.withComponents([]),
    HttpClientModule,
    MatButtonModule,
    MatDialogModule,
    RouterModule.forRoot([
      {
        path: '',
        component: UserloginComponent
      },
      {
         path: 'userlogin',
         component: UserloginComponent
      },
      {
        path: 'mainpage',
        component: MainpageComponent
      },
      {
        path: 'add',
        component: AddComponent
      }
   ]),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ModalComponent]
})
export class AppModule { }
