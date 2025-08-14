import { DadosAgrupados, FilmeInterface } from './../card-filme/interface-filme';
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
  listarFilmes: FilmeInterface[] = []
  listaDeCategoria: Map<string, FilmeInterface[]> = new Map()
  categoria: string[] = []

  modoDeExibicao: string = ""

  filmesAgrupados: DadosAgrupados[] = []

  ordemAtual: "asc" | "desc" = "asc"

ngOnInit(): void {
  this.agruparRecentes()
}

  agruparRecentes() {
    this.modoDeExibicao = "recentesAtivo"
    this.listarFilmes = mockFilmes
  }

  mapearPorGenero() {
    this.modoDeExibicao = "generoAtivo"

    this.listaDeCategoria = new Map()
    mockFilmes.forEach((filme:FilmeInterface) => {
      const nomeGenero = filme.genero
      
      if (!this.listaDeCategoria.has(nomeGenero)) {
        this.listaDeCategoria.set(nomeGenero, [])
      }
      
      this.listaDeCategoria.get(nomeGenero)?.push(filme)
    })

    this.agrupar("genero")
  }

  mapearPorAno() {
    this.modoDeExibicao = "anoAtivo"
    
    this.listaDeCategoria = new Map()
    mockFilmes.forEach((filme:FilmeInterface) => {
      const ano = parseInt(filme.ano, 10)
      const decada = Math.floor(ano / 10) * 10
      const chaveDecada = `Década de ${decada}`

      if (!this.listaDeCategoria.has(chaveDecada)) {
        this.listaDeCategoria.set(chaveDecada, [])
      }

      this.listaDeCategoria.get(chaveDecada)?.push(filme)
    })

    this.listaDeCategoria.forEach((filmes) => {
      filmes.sort((a, b) => parseInt(a.ano, 10) - parseInt(b.ano, 10))
    })
    
    this.agrupar("ano")
  }

  mapearAlfabetico() {
    if (this.ordemAtual === "asc") {
      this.ordenarAZ()
    } else {
      this.ordenarZA()
    }
  }

  alternarOrdem() {
    if (this.ordemAtual === "asc") {
      this.ordemAtual = "desc"
    } else {
      this.ordemAtual = "asc"
    }
    this.mapearAlfabetico()
  }

  ordenarAZ() {
    this.modoDeExibicao = "alfabeticoAtivo"
    this.listarFilmes = [...mockFilmes].sort((primeiro, ultimo) => 
      primeiro.titulo.localeCompare(ultimo.titulo)
    )
  }

  ordenarZA() {
    this.modoDeExibicao = "alfabeticoAtivo"
    this.listarFilmes = [...mockFilmes].sort((primeiro, ultimo) => 
      ultimo.titulo.localeCompare(primeiro.titulo)
    )
  }

  mapearFavoritos() {
    this.modoDeExibicao = "favoritosAtivo"

    this.listarFilmes = mockFilmes.filter(filme => filme.favorito)
    this.listarFilmes.sort((primeiro, ultimo) => 
      primeiro.titulo.localeCompare(ultimo.titulo)
    )
  }
  
  agrupar(chave:string) {
    this.categoria = Array.from(this.listaDeCategoria.keys())
    this.categoria.sort()
        
    this.filmesAgrupados = this.categoria.map(chave => ({
      tituloCategoria: chave,
      filmes: this.listaDeCategoria.get(chave) ?? []
    }))
  }

}
