import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhantomPageComponent } from './phantom-page.component';

describe('PhantomPageComponent', () => {
  let component: PhantomPageComponent;
  let fixture: ComponentFixture<PhantomPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhantomPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhantomPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
