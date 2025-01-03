import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AboutRoutes } from './about.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AboutRoutes)
  ]
})
export class AboutModule {}