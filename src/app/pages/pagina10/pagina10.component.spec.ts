import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pagina10Component } from './pagina10.component';

describe('Pagina10Component', () => {
  let component: Pagina10Component;
  let fixture: ComponentFixture<Pagina10Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Pagina10Component]
    });
    fixture = TestBed.createComponent(Pagina10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
