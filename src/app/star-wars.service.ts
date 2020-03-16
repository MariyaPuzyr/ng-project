import {Injectable} from '@angular/core';

@Injectable()
export class StarWarsService {
  public characters = [
    {name: 'Luke Skywalker', side: ''},
    {name: 'Padme Amidala', side: ''},
    {name: 'Darth Vader', side: ''}
  ];

  public getCharacters(chosenList) {
    if (chosenList === 'all') {
      return this.characters.slice();
    }
    return this.characters.filter((char) => {
      return char.side === chosenList;
    });
  }

  public onSideChosen(charInfo) {
    const pos = this.characters.findIndex((char) => {
      return char.name === charInfo.name;
    });
    this.characters[pos].side = charInfo.side;
  }
}