import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor( private http:HttpClient) { }

  getData(): Observable <any> {
    const url ="https://api.github.com/users"

    return this.http.get<any>(url)
  }
}
