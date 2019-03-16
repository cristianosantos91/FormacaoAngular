import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HeroDetailComponent } from './hero-detail.component';
import { FormsModule } from '@angular/forms';

const routes: Routes =  [
  { path: '', component: HeroDetailComponent }
];

@NgModule({
  declarations: [HeroDetailComponent],
  imports: [RouterModule.forChild(routes), CommonModule, FormsModule],
  exports: [RouterModule]
})
export class HeroDetailModule { }
