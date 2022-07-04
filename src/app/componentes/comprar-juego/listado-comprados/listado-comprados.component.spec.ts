import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoCompradosComponent } from './listado-comprados.component';

describe('ListadoCompradosComponent', () => {
  let component: ListadoCompradosComponent;
  let fixture: ComponentFixture<ListadoCompradosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoCompradosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoCompradosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
