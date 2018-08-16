import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTextPageComponent } from './create-text-page.component';

describe('CreateTextPageComponent', () => {
  let component: CreateTextPageComponent;
  let fixture: ComponentFixture<CreateTextPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateTextPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTextPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
