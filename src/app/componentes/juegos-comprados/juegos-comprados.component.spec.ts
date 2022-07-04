import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuegosCompradosComponent } from './juegos-comprados.component';

describe('JuegosCompradosComponent', () => {
  let component: JuegosCompradosComponent;
  let fixture: ComponentFixture<JuegosCompradosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JuegosCompradosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JuegosCompradosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
