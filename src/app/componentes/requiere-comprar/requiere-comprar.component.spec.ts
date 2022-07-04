import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequiereComprarComponent } from './requiere-comprar.component';

describe('RequiereComprarComponent', () => {
  let component: RequiereComprarComponent;
  let fixture: ComponentFixture<RequiereComprarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequiereComprarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequiereComprarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
