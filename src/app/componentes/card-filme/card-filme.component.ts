import { Component, input} from '@angular/core';
import { FilmeInterface } from './interface-filme';

@Component({
  selector: 'app-card-filme',
  imports: [],
  templateUrl: './card-filme.component.html',
  styleUrl: './card-filme.component.css'
})
export class CardFilmeComponent {
  filme = input.required<FilmeInterface>()

  alternarFavorito() {
    this.filme().favorito = !this.filme().favorito
  }
}
