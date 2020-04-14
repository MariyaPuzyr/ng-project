import {Injectable} from '@angular/core';
import {LogService} from './log.service';
import {Subject} from 'rxjs';
// import {Http} from '@angular/http';
import {HttpClient, HttpResponse} from '@angular/common/http';

@Injectable()
export class StarWarsService {
  public characters = [
    {name: 'Luke Skywalker', side: ''},
    {name: 'Padme Amidala', side: ''},
    {name: 'Darth Vader', side: ''}
  ];
  public charactersChanged = new Subject<void>();

  constructor(private logService: LogService, private http: HttpClient) { }

  public fetchCharacters() {
    this.http.get('https://pokeapi.co/api/v2/').subscribe(
      (response: HttpResponse<any>) => {
        console.log(response);
      }
    );
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
