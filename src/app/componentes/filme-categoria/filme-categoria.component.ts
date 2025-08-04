import { Component, Input } from '@angular/core';
import { CardFilmeComponent } from '../card-filme/card-filme.component';
import { FilmeInterface } from '../card-filme/interface-filme';

@Component({
  selector: 'app-filme-categoria',
  imports: [CardFilmeComponent],
  templateUrl: './filme-categoria.component.html',
  styleUrl: './filme-categoria.component.css'
})
export class FilmeCategoriaComponent {
  @Input() listarFilmes: FilmeInterface[] = []
  tituloCategoria = ""
}
