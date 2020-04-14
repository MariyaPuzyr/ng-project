import {Injectable} from '@angular/core';
import {LogService} from './log.service';
import {Subject} from 'rxjs';
import {Http} from '@angular/http';

@Injectable()
export class StarWarsService {
  public characters = [
    {name: 'Luke Skywalker', side: ''},
    {name: 'Padme Amidala', side: ''},
    {name: 'Darth Vader', side: ''}
  ];
  private logService: LogService;
  public charactersChanged = new Subject<void>();
  public http = Http;

  constructor(logService: LogService, http: Http) {
    this.logService = logService;
    this.http = http;
  }

  public fetchCharacters() {

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
    this.charactersChanged.next();
    this.logService.writeLog('Change side of ' + charInfo.name + ', new side:' + charInfo.side);
  }

  public addCharacter(name, side) {
    const pos = this.characters.findIndex((char) => {
      return char.name === name;
    });
    if (pos !== -1) {
      return;
    }
    const newChar = {name: name, side: side};
    this.characters.push(newChar);
  }
}
