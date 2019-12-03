import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyreminderComponent } from './myreminder.component';

describe('MyreminderComponent', () => {
  let component: MyreminderComponent;
  let fixture: ComponentFixture<MyreminderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyreminderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyreminderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
