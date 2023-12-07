import { Component } from '@angular/core';

@Component({
  selector: 'app-pokemons-list',
  templateUrl: './pokemons-list.component.html',
  styleUrls: ['./pokemons-list.component.sass']
})
export class PokemonsListComponent {
  pokemons = [
    "Bulbasaur",
    "Ivysaur",
    "Venosaur",
    "Charmander"
  ];  
}
