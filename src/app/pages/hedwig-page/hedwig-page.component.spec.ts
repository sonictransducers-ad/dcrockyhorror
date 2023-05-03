import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HedwigPageComponent } from './hedwig-page.component';

describe('HedwigPageComponent', () => {
  let component: HedwigPageComponent;
  let fixture: ComponentFixture<HedwigPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HedwigPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HedwigPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
