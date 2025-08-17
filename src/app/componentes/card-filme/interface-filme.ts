export interface FilmeInterface {
  id: string;
  titulo: string;
  genero: string;
  ano: string;
  favorito: boolean;
  assistiu: boolean
  capa: string
}

export interface DadosAgrupados {
  tituloCategoria: string;
  filmes: FilmeInterface[]
}