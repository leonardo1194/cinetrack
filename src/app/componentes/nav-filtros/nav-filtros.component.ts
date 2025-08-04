import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-nav-filtros',
  imports: [],
  templateUrl: './nav-filtros.component.html',
  styleUrl: './nav-filtros.component.css'
})
export class NavFiltrosComponent {

  @Output() filtrarGenero = new EventEmitter<void>()
  @Output() filtrarTodos = new EventEmitter<void>()

}