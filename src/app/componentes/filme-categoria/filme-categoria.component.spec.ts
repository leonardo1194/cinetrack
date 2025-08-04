import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmeCategoriaComponent } from './filme-categoria.component';

describe('FilmeCategoriaComponent', () => {
  let component: FilmeCategoriaComponent;
  let fixture: ComponentFixture<FilmeCategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilmeCategoriaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilmeCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
