import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CompartirMiDespensaPage } from './compartir-mi-despensa.page';

describe('CompartirMiDespensaPage', () => {
  let component: CompartirMiDespensaPage;
  let fixture: ComponentFixture<CompartirMiDespensaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CompartirMiDespensaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
