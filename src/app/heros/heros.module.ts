import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeroComponent} from './hero/hero.component';
import {HttpClient} from "@angular/common/http";


@NgModule({
  declarations: [HeroComponent],
  exports: [
    HeroComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HerosModule { }
