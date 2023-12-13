import { Component } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemons-list',
  templateUrl: './pokemons-list.component.html',
  styleUrls: ['./pokemons-list.component.sass'],
})
export class PokemonsListComponent {
  constructor(public pokemonService: PokemonService) {}
}
