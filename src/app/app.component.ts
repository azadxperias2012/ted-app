import { Component, OnInit } from '@angular/core';
import { TedRestService } from './ted-rest.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'TED Application';
  pageNumber = 1;
  first = true;
  last = true;
  currentPageNumber = 1;

  tedEvents = [];

  constructor(private tedRestService: TedRestService) {}

  ngOnInit() {
    this.onRetrievePage();
  }

  onRetrievePage() {

    if (this.pageNumber === NaN) {
      this.pageNumber = this.currentPageNumber;
    }

    this.tedRestService.getTedEvents(this.pageNumber - 1)
      .subscribe(
        (data: any) => {
          this.tedEvents = data.content;
          console.log(this.tedEvents[0]);
          this.first = data.first;
          this.last = data.last;
          this.currentPageNumber = data.number + 1;
        }, (error) => console.log(error)
      );
  }

  onNext() {
    this.pageNumber = this.currentPageNumber + 1;
    this.onRetrievePage();
  }

  onPrev() {
    this.pageNumber = this.currentPageNumber - 1;
    this.onRetrievePage();
  }
}
