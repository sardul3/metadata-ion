import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mentions',
  templateUrl: './mentions.component.html',
  styleUrls: ['./mentions.component.scss'],
})
export class MentionsComponent implements OnInit {
  @Input() searchString;

  constructor() { }

  ngOnInit() {}

}
