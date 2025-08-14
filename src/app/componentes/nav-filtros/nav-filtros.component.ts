import { Component, EventEmitter, input, Output } from '@angular/core';

@Component({
  selector: 'app-nav-filtros',
  imports: [],
  templateUrl: './nav-filtros.component.html',
  styleUrl: './nav-filtros.component.css'
})
export class NavFiltrosComponent {

  @Output() ordenarRecentes = new EventEmitter<void>()
  @Output() ordenarGenero = new EventEmitter<void>()
  @Output() ordenarAno = new EventEmitter<void>()
  @Output() ordenarAlfabetico = new EventEmitter<void>()
  @Output() ordenarFavoritos = new EventEmitter<void>()
  @Output() ordenarAssistidos = new EventEmitter<void>()

  botaoSelecionado: number = 0

  listaBotoes = [
    { id: 1, nome: 'Recentes', acao: () => this.ordenarRecentes.emit() },
    { id: 2, nome: 'Gênero', acao: () => this.ordenarGenero.emit() },
    { id: 3, nome: 'Ano de Lançamento', acao: () => this.ordenarAno.emit() },
    { id: 4, nome: 'A - Z', acao: () => this.ordenarAlfabetico.emit() },
    { id: 5, nome: 'Favoritos', acao: () => this.ordenarFavoritos.emit() },
    // { id: 6, nome: 'Assistidos', acao: () => this.ordenarAssistidos.emit() },
  ]

  }