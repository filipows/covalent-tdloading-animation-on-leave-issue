import { Component } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { MatIconRegistry } from "@angular/material/icon";
import { TdMediaService } from "@covalent/core/media";
import { trigger, transition, style, animate } from "@angular/animations";

import { pokemons as allPokemons, getRandomPokemon } from "./pokemons";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  animations: [
    trigger("fadeInOnEnterFadeOutOnLeave", [
      transition(":enter", [
        style({ opacity: "0%" }), // initial
        animate("0.5s", style({ opacity: "100%" })) // final
      ]),
      transition(":leave", [
        style({ opacity: "100%" }), // initial
        animate("0.5s", style({ opacity: "0%" })) // final
      ])
    ])
  ]
})
export class AppComponent {
  pokemons = [{name: allPokemons[0], loading: false}];

  add() {
    const newPokemon = {name: getRandomPokemon(), loading: true};
    this.pokemons.push(newPokemon);
    setTimeout( () => {
      newPokemon.loading = false;
    }, 1000)
  }

  remove() {
    this.pokemons.pop();
  }
}
