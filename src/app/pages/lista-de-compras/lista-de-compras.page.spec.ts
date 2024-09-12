import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaDeComprasPage } from './lista-de-compras.page';

describe('ListaDeComprasPage', () => {
  let component: ListaDeComprasPage;
  let fixture: ComponentFixture<ListaDeComprasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaDeComprasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
