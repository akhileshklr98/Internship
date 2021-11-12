import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { CreateClassComponent } from './create-class/create-class.component';
import { ShowStudentComponent } from './show-student/show-student.component';
import { ShowClassComponent } from './show-class/show-class.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'createStudent', component: CreateStudentComponent},
  {path: 'createClass', component: CreateClassComponent},
  {path: 'showStudent', component: ShowStudentComponent},
  {path: 'showClass', component: ShowClassComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
