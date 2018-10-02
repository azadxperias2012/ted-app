import { Component, OnInit } from '@angular/core';
import { TedRestService } from './ted-rest.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  tedEvents = [];

  title = 'TED Application';
  pageNumber = 1;
  first = true;
  last = true;
  currentPageNumber = 1;
  eventName = '';

  options = ['publishedDate', 'views'];
  optionSelected: any = 'views';
  sortDesc = false;

  constructor(private tedRestService: TedRestService) {}

  ngOnInit() {
    this.onRetrievePage();
  }

  onRetrievePage() {
    if (this.pageNumber === NaN) {
      this.pageNumber = this.currentPageNumber;
    }

    if (this.eventName.length !== 0) {
      this.onFilterPageByEvent(null);
      return;
    }

    const sortOrder = this.sortDesc ? 1 : 0;
    this.tedRestService.getTedEvents(this.pageNumber - 1, this.optionSelected, sortOrder)
      .subscribe(
        (data: any) => {
          this.syncResponse(data);
        }, (error) => console.log(error)
      );
  }

  onFilterPageByEvent(event) {
    if (event !== null) {
      this.pageNumber = 1;
    }

    if (this.eventName.length === 0) {
      this.pageNumber = 1;
      this.onRetrievePage();
      return;
    }

    if (this.pageNumber === NaN) {
      this.pageNumber = this.currentPageNumber;
    }

    const sortOrder = this.sortDesc ? 1 : 0;
    this.tedRestService.getTedEventsByEventFilter(this.pageNumber - 1, this.eventName, this.optionSelected, sortOrder)
      .subscribe(
        (data: any) => {
          this.syncResponse(data);
        }, (error) => console.log(error)
      );
  }

  syncResponse(data: any) {
    this.tedEvents = data.content;
    this.first = data.first;
    this.last = data.last;
    this.currentPageNumber = data.number + 1;
  }

  onNext() {
    this.pageNumber = this.currentPageNumber + 1;
    this.onRetrievePage();
  }

  onPrev() {
    this.pageNumber = this.currentPageNumber - 1;
    this.onRetrievePage();
  }

  onOptionSelected(event) {
    this.onRetrievePage();
  }

  onSortOrderChange() {
    this.sortDesc = !this.sortDesc;
    this.onRetrievePage();
  }
}
