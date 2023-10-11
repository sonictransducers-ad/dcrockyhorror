import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LincolnshowComponent } from './lincolnshow.component';

describe('LincolnshowComponent', () => {
  let component: LincolnshowComponent;
  let fixture: ComponentFixture<LincolnshowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LincolnshowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LincolnshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
