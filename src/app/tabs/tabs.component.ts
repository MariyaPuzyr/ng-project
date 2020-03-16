import {Component, OnInit} from '@angular/core';

import {StarWarsService} from '../star-wars.service';
@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  public characters = [];
  public chosenList = 'all';
  public swService: StarWarsService;

  constructor(swService: StarWarsService) {
    this.swService = swService;
  }

  ngOnInit(): void {
  }

  public onChoose(side) {
    this.chosenList = side ;
  }
  public getCharacters() {
    // if (this.chosenList === 'all') {
    //   return this.characters.slice();
    // }
    // return this.characters.filter((char) => {
    //   return char.side === this.chosenList;
    // });
    this.characters = this.swService.getCharacters(this.chosenList);
    return this.characters;
  }
}
