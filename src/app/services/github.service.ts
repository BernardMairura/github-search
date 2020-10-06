import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  username:string;
  reponame:string
  clientId:string='60127b19fadef7d5c02e'
  clientSecret:string='73e80b9d31344d306be88a6116f2d9bd8edab29d'

  constructor( private http:HttpClient) {
    this.username="BernardMairura"
   }

  getData(): Observable <any> {

    return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.clientId + "&client_secret=" + this.clientSecret)
  }

  getRepo():Observable<any>{

  return this.http.get("https://api.github.com/users/" + this.username + "/repos?client_id=" + this.clientId + "&client_secret=" + this.clientSecret)
}

  updateUser(username:string) {
    this.username = username;
  }

  updateRepo(repos:string) {
    this.reponame = repos;
  }

}
