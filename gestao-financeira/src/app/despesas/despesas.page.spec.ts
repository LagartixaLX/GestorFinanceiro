import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DespesasPage } from './despesas.page';

describe('DespesasPage', () => {
  let component: DespesasPage;
  let fixture: ComponentFixture<DespesasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DespesasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
