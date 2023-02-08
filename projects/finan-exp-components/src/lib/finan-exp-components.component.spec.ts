import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanEXPComponentsComponent } from './finan-exp-components.component';

describe('FinanEXPComponentsComponent', () => {
  let component: FinanEXPComponentsComponent;
  let fixture: ComponentFixture<FinanEXPComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinanEXPComponentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinanEXPComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
