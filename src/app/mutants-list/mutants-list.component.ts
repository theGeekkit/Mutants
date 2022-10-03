import { Component, OnInit } from '@angular/core';
import { Mutant } from '../Model/mutant';

@Component({
  selector: 'app-mutants-list',
  templateUrl: './mutants-list.component.html',
  styleUrls: ['./mutants-list.component.css']
})
export class MutantsListComponent implements OnInit {

  mutants: Mutant[] = [ {
    alias:"Sub-Mariner",
    name: "Namor",
    powers: "Namor is stronger and tougher than most any human or Atlantean. He can go toe-to-toe with some of the strongest beings on Earth and come out unscathed, especially when underwater or doused with H2O, which increases his strength by extreme degrees. Namor has telepathic abilities from his Atlantean heritage that allow to him to communicate and command not only sea life, but also fellow Atlantean soldiers, if need be. Namor increased longevity—he has a much longer lifespan than a human, and shows little signs of aging, despite being born many decades ago. His mutant power is the gift of flight, represented by the tiny wings on his ankles. He can fly quite fast and for indefinite periods. Aside from his natural strength, endurance, and abilities, Namor's intelligence and intuition are exceptional. He's equally at home leading a business in the boardroom as he is leading Atlantean armies.",
    imageUrl:'https://i.postimg.cc/wjcGC9gT/Namor-First-Look-From-Black-Panther-2-Leaks-Online1400-62c178e9eabb5.jpg'
  },
]

  constructor() { }

  ngOnInit(): void {
  }

}
