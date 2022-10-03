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
    powers: "Stronger and tougher than average human or atlantean. Strength further enhanced when underwater or doused with H20. Telepathic abilities derived from atlantean heritage. Namor also has the ability to fly for indefinite periods due to small wings on his ankles. He also possesses indeterminite longevity as he has shown no signs of aging even though he is several decades old.",
    imageUrl:'https://i.postimg.cc/j5LpyBN6/Namor.jpg'
  },
  {
    alias:"Angel",
    name: "Warren Worthington III",
    powers: "Flight via feathered wings and hollow bones Aerial adaptation Enhanced physical prowess.",
    imageUrl:'https://thecomicvault.files.wordpress.com/2017/01/comics-marvel_00364983-970x545.jpg'
  },
  {
    alias:"Beast",
    name: "Henry 'Hank' McCoy",
    powers: "Superhuman agility and athletic prowess further enhanced by serum that altered his physical appearance to be covered in blue fur and be overall more bestial",
    imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUCI8wWFyPMUh7oDWqHAv2_ZZ3_qqMa2zWPQ&usqp=CAU'
  },
]

  constructor() { }

  ngOnInit(): void {
  }

}
