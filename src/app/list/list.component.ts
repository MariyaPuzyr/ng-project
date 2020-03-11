import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() public characters;
  @Output() public characterSide = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

}
