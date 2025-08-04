import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavFiltrosComponent } from './nav-filtros.component';

describe('NavFiltrosComponent', () => {
  let component: NavFiltrosComponent;
  let fixture: ComponentFixture<NavFiltrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavFiltrosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavFiltrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
