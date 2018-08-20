import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextDetailsPageComponent } from './text-details-page.component';

describe('TextDetailsPageComponent', () => {
  let component: TextDetailsPageComponent;
  let fixture: ComponentFixture<TextDetailsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextDetailsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
