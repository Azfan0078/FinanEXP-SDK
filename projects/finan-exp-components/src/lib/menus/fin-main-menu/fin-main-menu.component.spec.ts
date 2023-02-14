import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinMainMenuComponent } from './fin-main-menu.component';

describe('FinMainMenuComponent', () => {
  let component: FinMainMenuComponent;
  let fixture: ComponentFixture<FinMainMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinMainMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinMainMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
