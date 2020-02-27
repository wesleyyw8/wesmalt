import { GameDetailComponent } from './game-detail.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { DataService } from '../data.service';
import { Router, ActivatedRoute } from '@angular/router';

import { of } from 'rxjs';
import { doesNotThrow } from 'assert';

describe('GameDetailComponent', () => {
  let component: GameDetailComponent;
  let fixture: ComponentFixture<GameDetailComponent>;
  let dataServiceMock;
  let mockRouter;
  let mockActivatedRoute = {
    snapshot: {
      params: 3
    }
  };

  beforeEach(async(() => {
    dataServiceMock = jasmine
      .createSpyObj(['getGameCategories', 'getGameById']);

    mockRouter = jasmine.createSpyObj(['navigateByUrl']);

    TestBed.configureTestingModule({
      imports: [ SharedModule, FormsModule ],
      declarations: [ GameDetailComponent ],
      providers: [{
        provide: DataService,
        useValue: dataServiceMock
      }, {
        provide: Router,
        useValue: mockRouter
      }, {
        provide: ActivatedRoute,
        useValue: mockActivatedRoute
      }]
    })
    .compileComponents();
    dataServiceMock.getGameById.and.returnValue(of({
      name: 'nam test',
      description: 'des test',
      jurisdiction: 'juri',
      vendor: 'ven',
      thumbnails: {
        '600x280': null
      },
      meta: {
        currency: 'EUR',
        free_spins: true
      }
    }));
    
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a div with the class card-header with the game name', () => {
    const name = fixture.nativeElement.querySelectorAll('.card-header')[0];
    expect(name.textContent).toContain('nam test');
  });

  it('should go to another url in case user hits back button', () => {
    const btn = fixture.nativeElement.querySelectorAll('.btn.btn-lg.btn-block.btn-primary')[0];
    btn.click();
    expect(mockRouter.navigateByUrl).toHaveBeenCalled();
  });
});
