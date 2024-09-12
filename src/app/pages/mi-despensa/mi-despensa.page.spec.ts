import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MiDespensaPage } from './mi-despensa.page';

describe('MiDespensaPage', () => {
  let component: MiDespensaPage;
  let fixture: ComponentFixture<MiDespensaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MiDespensaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
