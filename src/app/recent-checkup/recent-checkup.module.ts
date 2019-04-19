import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RecentCheckupPage } from './recent-checkup.page';

const routes: Routes = [
  {
    path: '',
    component: RecentCheckupPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RecentCheckupPage]
})
export class RecentCheckupPageModule {}
