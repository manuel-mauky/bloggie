import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorsOverviewPageComponent } from './authors-overview-page.component';

describe('AuthorsOverviewPageComponent', () => {
  let component: AuthorsOverviewPageComponent;
  let fixture: ComponentFixture<AuthorsOverviewPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorsOverviewPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorsOverviewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
