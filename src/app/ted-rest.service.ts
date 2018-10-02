import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TedRestService {

  readonly REST_END_POINT: string = 'http://localhost:8081/tedevent';
  readonly PAGE_RESOURCE: string = 'page';

  constructor(private http: Http) { }

  getTedEvents(pageNumber: number, sortBy: string, sortOrder: number) {
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    const page: string = this.REST_END_POINT + '/' + this.PAGE_RESOURCE + '/' + pageNumber
      + '?sortBy=' + sortBy + '&sortOrder' + sortOrder;
    return this.http.get(page).pipe(map(
        (response: Response) => {
          const data = response.json();
          return data;
        })
    );
  }

  getTedEventsByEventFilter(pageNumber: number, event: string, sortBy: string, sortOrder: number) {
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    // http://localhost:8081/tedevent/page?number=0&event=TED2004
    const page: string = this.REST_END_POINT + '/' + this.PAGE_RESOURCE
      + '?number=' + pageNumber + '&event=' + event + '&sortBy=' + sortBy + '&sortOrder' + sortOrder;
    return this.http.get(page).pipe(map(
      (response: Response) => {
        const data = response.json();
        return data;
      })
    );
  }
}
