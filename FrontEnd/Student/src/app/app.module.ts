import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { ShowStudentComponent } from './show-student/show-student.component';
import { CreateClassComponent } from './create-class/create-class.component';
import { ShowClassComponent } from './show-class/show-class.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CreateStudentComponent,
    ShowStudentComponent,
    CreateClassComponent,
    ShowClassComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
