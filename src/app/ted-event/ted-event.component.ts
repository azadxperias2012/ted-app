import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ted-event',
  templateUrl: './ted-event.component.html',
  styleUrls: ['./ted-event.component.css']
})
export class TedEventComponent implements OnInit {

  toggle = false;

  @Input() element: {
    id: number,
    description: string,
    name: string,
    mainSpeaker: string,
    speakerOccupation: string,
    url: string,
    views: number,
    event: string
    publishedDate: number
  };

  constructor() { }

  ngOnInit() {
  }

  onMoreInfo() {
    this.toggle = !this.toggle;
    console.log('More Information');
  }

}
