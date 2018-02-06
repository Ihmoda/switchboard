import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchappComponent } from './switchapp.component';

describe('SwitchappComponent', () => {
  let component: SwitchappComponent;
  let fixture: ComponentFixture<SwitchappComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwitchappComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
