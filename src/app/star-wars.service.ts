import {Injectable} from '@angular/core';
import {LogService} from './log.service';

@Injectable()
export class StarWarsService {
  public characters = [
    {name: 'Luke Skywalker', side: ''},
    {name: 'Padme Amidala', side: ''},
    {name: 'Darth Vader', side: ''}
  ];
  private logService: LogService;

  constructor(logService: LogService) {
    this.logService = logService;
  }

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
    this.logService.writeLog('Change side of ' + charInfo.name + ', new side:' + charInfo.side);
  }

  public addCharacter(name, side) {
    const newChar = {name: name, side: side};
    this.characters.push(newChar);
  }
}
