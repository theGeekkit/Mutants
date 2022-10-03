import { Component, OnInit, Input } from '@angular/core';
import { Mutant } from '../Model/mutant';

@Component({
  selector: 'app-mutant',
  templateUrl: './mutant.component.html',
  styleUrls: ['./mutant.component.css']
})
export class MutantComponent implements OnInit {

  @Input() mutant: Mutant = {  alias: "",
    name: "",
    powers: "",
    imageUrl: ""}

  constructor() { }

  ngOnInit(): void {
  }

}
