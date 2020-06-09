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
import { EditComponent } from './edit/edit.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    UserloginComponent,
    MainpageComponent,
    SiderbarComponent,
    ModalComponent,
    AddComponent,
    EditComponent,
    HomeComponent

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
        component: HomeComponent
      },
      {
        path: 'home',
        component: HomeComponent
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
      },
      {
        path: 'edit',
        component: EditComponent
      }
   ]),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ModalComponent]
})
export class AppModule { }
