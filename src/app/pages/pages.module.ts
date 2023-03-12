import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserFormComponent } from './user-form/user-form.component';
import { ServicesModule } from '../services/services.module';
import { ComponentsModule } from '../components/components.module';



@NgModule({
  declarations: [
    HomeComponent,
    NotFoundComponent,
    UserFormComponent
  ],
  imports: [
    CommonModule, ServicesModule, ComponentsModule
  ],
  exports: [
    HomeComponent, NotFoundComponent, UserFormComponent

  ]
})
export class PagesModule { }
