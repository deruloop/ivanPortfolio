import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContactRoutes } from './contact.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ContactRoutes)
  ]
})
export class ContactModule {}