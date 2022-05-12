import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  name: string
  urlImage: string
  urlImageB: string
  urlImageC: string
  urlImageD: string
  hp: string
  attack: string
  defense: string
  specialattack: string
  specialdefense: string
  speed: string

  constructor(private pokemonService : PokemonService) { }


  ngOnInit(): void {
  }

  search() {
    this.pokemonService.getPokemon(this.name).subscribe((data:any) => {
      this.urlImage = data.sprites.front_shiny
      this.urlImageB = data.sprites.back_shiny
      this.urlImageC = data.sprites.front_shiny_female
      this.urlImageD = data.sprites.back_shiny_female
      this.hp = data.stats[0].base_stat
      this.attack = data.stats[1].base_stat
      this.defense = data.stats[2].base_stat
      this.specialattack = data.stats[3].base_stat
      this.specialdefense = data.stats[4].base_stat
      this.speed = data.stats[5].base_stat
    })
  }
}
