import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {StarWarsService} from '../star-wars.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() public character;
  @Output() sideAssigned = new EventEmitter<{ name: string, side: string }>();
  swService: StarWarsService;

  constructor(swService: StarWarsService) {
    this.swService = swService;
  }

  ngOnInit(): void {
  }

  public onAssign(side) {
    // this.character.side = side;
    // this.sideAssigned.emit({name: this.character.name, side: side});
    this.swService.onSideChosen({name: this.character.name, side: side});
  }
}
