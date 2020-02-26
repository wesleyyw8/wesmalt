import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesComponent } from './games.component';
import { RouterModule } from '@angular/router';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { DataService } from './data.service';

@NgModule({
  declarations: [GamesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: GamesComponent
    }]),
    TabsModule.forRoot()
  ],
  providers: [DataService]
})
export class GamesModule { }
