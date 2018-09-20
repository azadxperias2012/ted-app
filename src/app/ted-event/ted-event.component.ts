import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ted-event',
  templateUrl: './ted-event.component.html',
  styleUrls: ['./ted-event.component.css']
})
export class TedEventComponent implements OnInit {

  @Input() element: {
    id: number,
    description: string,
    name: string,
    mainSpeaker: string,
    speakerOccupation: string
  };

  constructor() { }

  ngOnInit() {
  }

}
