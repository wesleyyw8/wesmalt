import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { GamesComponent } from './games.component';
import { FormsModule } from '@angular/forms';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { SharedModule } from 'src/app/shared/shared.module';

describe('GamesComponent', () => {
  let component: GamesComponent;
  let fixture: ComponentFixture<GamesComponent>;
  let dataServiceMock;
  let mockRouter;

  beforeEach(async(() => {
    dataServiceMock = jasmine
    .createSpyObj(['getGameCategories']);

    mockRouter = jasmine.createSpyObj(['navigateByUrl']);

    TestBed.configureTestingModule({
      imports: [FormsModule, TabsModule.forRoot(), SharedModule],
      declarations: [ GamesComponent ],
      providers: [{
        provide: DataService,
        useValue: dataServiceMock
      }, {
        provide: Router,
        useValue: mockRouter
      }]
    })
    .compileComponents();
    dataServiceMock.getGameCategories.and.returnValue(of(
      [{
        name: 'aa title',
        _embedded: {
          games: [{
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
          }]
        }
      }]
    ));
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('card header should have the title of the game', () => {
    const cardHeader = fixture.nativeElement.querySelectorAll('.games-list.bg-light .card-header')[0];
    expect(cardHeader.textContent).toContain('nam test');
  });

  it('button view details should be visible', () => {
    const button = fixture.nativeElement.querySelectorAll('.btn.btn-lg.btn-block.btn-primary')[0];
    expect(button.textContent.toLowerCase()).toContain('details');
  });

  it('clicking on button details should redirect to another page', () => {
    const button = fixture.nativeElement.querySelectorAll('.btn.btn-lg.btn-block.btn-primary')[0];
    button.click();
    expect(mockRouter.navigateByUrl).toHaveBeenCalled();
  });
});
