import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterListPipe } from './filter-list/filter-list.pipe';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  declarations: [FilterListPipe, LoaderComponent],
  imports: [
    CommonModule
  ],
  exports: [
    FilterListPipe,
    LoaderComponent
  ]
})
export class SharedModule { }
