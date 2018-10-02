import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ted-event',
  templateUrl: './ted-event.component.html',
  styleUrls: ['./ted-event.component.css']
})
export class TedEventComponent implements OnInit {

  toggleIdMap: Map<string, boolean> = new Map<string, boolean>();

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

  onMoreInfo(id) {
    const toggle: boolean = this.toggleIdMap.get(id);
    this.toggleIdMap.set(id, !toggle);
  }

}
