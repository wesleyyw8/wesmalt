import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { DataService } from './data.service';
import { GameDetailComponent } from './game-detail/game-detail.component';
import { GamesComponent } from './games-list/games.component';
import { FilterListPipe } from '../shared/filter-list/filter-list.pipe';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [GamesComponent, GameDetailComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    RouterModule.forChild([
    {
      path: '',
      component: GamesComponent
    },
    {
      path: ':id',
      component: GameDetailComponent
    }
  ]),
    TabsModule.forRoot()
  ],
  providers: [DataService]
})
export class GamesModule { }
