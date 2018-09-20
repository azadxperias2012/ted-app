import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TedRestService {

  readonly REST_END_POINT: string = 'http://localhost:8081/tedevent';
  readonly PAGE_RESOURCE: string = 'page'

  constructor(private http: Http) { }

  getTedEvents(pageNumber: number) {
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    let page: string = this.REST_END_POINT + '/' + this.PAGE_RESOURCE + '/' + pageNumber;
    return this.http.get(page).pipe(map(
        (response: Response) => {
          const data = response.json();
          return data;
        })    
      );
  }
}
