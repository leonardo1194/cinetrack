import { FilmeInterface } from './../card-filme/interface-filme';
import { Component, OnInit } from '@angular/core';
import { mockFilmes } from '../../mock-filmes';
import { NavFiltrosComponent } from '../nav-filtros/nav-filtros.component';
import { CardFilmeComponent } from '../card-filme/card-filme.component';

@Component({
  selector: 'app-lista-filmes',
  imports: [
    NavFiltrosComponent,
    CardFilmeComponent
  ],
  templateUrl: './lista-filmes.component.html',
  styleUrl: './lista-filmes.component.css'
})
export class ListaFilmesComponent implements OnInit {

  exibirLista: FilmeInterface[] = []
  listarFilmes: FilmeInterface[] = []
  listaDeGeneros: Map<string, FilmeInterface[]> = new Map()
  generos: string[] = []
  
  ngOnInit(): void {
    // this.listarFilmes = mockFilmes
  }

  exibirTodos() {
    this.listarFilmes = mockFilmes
    this.exibirLista = this.listarFilmes
  }

  exibirPorGenero() {
    this.listaDeGeneros = new Map()
    mockFilmes.forEach((filme:FilmeInterface) => {
      const nomeGenero = filme.genero
      
      if (!this.listaDeGeneros.has(nomeGenero)) {
        this.listaDeGeneros.set(nomeGenero, [])
        //this.generos.push(nomeGenero)
      }
      
      this.listaDeGeneros.get(nomeGenero)?.push(filme)
    })
    this.generos = Array.from(this.listaDeGeneros.keys())
    //console.log(this.listaDeGeneros)
    console.log(this.generos)
  }
}
