import { Component, OnInit } from '@angular/core';
import { TedRestService } from './ted-rest.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'TED Application';
  pageNumber: number = 0;

  tedEvents = [];

  constructor(private tedRestService: TedRestService) {}

  ngOnInit() {
    this.onRetrievePage();
  }

  onRetrievePage() {
    this.tedRestService.getTedEvents(this.pageNumber)
      .subscribe(
        (data: any) => {
          this.tedEvents = data.content;
          console.log(this.tedEvents[0]);
        }, (error) => console.log(error)
      );
  }
}
