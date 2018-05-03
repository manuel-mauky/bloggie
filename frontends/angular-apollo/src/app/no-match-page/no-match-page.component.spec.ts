import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoMatchPageComponent } from './no-match-page.component';

describe('NoMatchPageComponent', () => {
  let component: NoMatchPageComponent;
  let fixture: ComponentFixture<NoMatchPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoMatchPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoMatchPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
