import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.sass']
})
export class PokemonCardComponent {
  @Input()
  pokemon!: string;

  @Input()
  numero!: number;

  pegarImagemPokemon(){
    const numeroEmString: string = this.numero.toString()
    const numeroFormatado = numeroEmString.padStart(3,"0");

    return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${numeroFormatado}.png`
  }
}
