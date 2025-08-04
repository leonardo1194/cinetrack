import { Component } from '@angular/core';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HeroImageComponent } from './componentes/hero-image/hero-image.component';
import { ListaFilmesComponent } from './componentes/lista-filmes/lista-filmes.component';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    HeroImageComponent,
    ListaFilmesComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cinetrack';
}
