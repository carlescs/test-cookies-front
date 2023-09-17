import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AddCookieComponent } from './components/add-cookie/add-cookie.component';

const routes: Routes = [
  {path: '', component: AddCookieComponent}
];

@NgModule({
  declarations: [AddCookieComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class AddCookieModule {}
