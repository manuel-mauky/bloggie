import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagOverviewPageComponent } from './tag-overview-page.component';

describe('TagOverviewPageComponent', () => {
  let component: TagOverviewPageComponent;
  let fixture: ComponentFixture<TagOverviewPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagOverviewPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagOverviewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
