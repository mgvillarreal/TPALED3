import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprarJuegoComponent } from './comprar-juego.component';

describe('ComprarJuegoComponent', () => {
  let component: ComprarJuegoComponent;
  let fixture: ComponentFixture<ComprarJuegoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComprarJuegoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComprarJuegoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
