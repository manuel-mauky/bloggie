import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesOverviewPageComponent } from './articles-overview-page.component';

describe('ArticlesOverviewPageComponent', () => {
  let component: ArticlesOverviewPageComponent;
  let fixture: ComponentFixture<ArticlesOverviewPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticlesOverviewPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlesOverviewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
