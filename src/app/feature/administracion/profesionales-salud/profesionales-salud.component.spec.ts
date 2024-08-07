import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfesionalesSaludComponent } from './profesionales-salud.component';

describe('ProfesionalesSaludComponent', () => {
  let component: ProfesionalesSaludComponent;
  let fixture: ComponentFixture<ProfesionalesSaludComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfesionalesSaludComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfesionalesSaludComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
