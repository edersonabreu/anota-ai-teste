import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { PageList } from '../models/page-list.model';

@Injectable({
  providedIn: 'root'
})
export class PageListService {

  constructor(
    private http: HttpClient
  ) { }

  getPageList(): Observable<PageList[]>{
    const endpoint = 'cardlist.json';
    return this.http.get<PageList[]>(
      environment.apiUrl + endpoint
    )
  }
}
