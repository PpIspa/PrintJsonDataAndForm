import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { UserListItemComponent } from './user-list-item/user-list-item.component';
import { UserFormComponent } from './user-form/user-form.component';



@NgModule({
  declarations: [
    UserListComponent,
    UserListItemComponent,
    UserFormComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UserFormComponent, UserListComponent, UserListItemComponent
  ]
})
export class ComponentsModule { }
