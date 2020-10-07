import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {environment} from 'src/environments/environment'
import {Repo} from 'src/app/repo';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  repoName:any;
  username:string;
  clientId:string='60127b19fadef7d5c02e'
  clientSecret:string='73e80b9d31344d306be88a6116f2d9bd8edab29d'
  apiKey:string="?access_token=597ce780a01b7e3e5ce4038396817bedb60d5a0a"
 

  constructor( private http:HttpClient) {
    this.username="BernardMairura"
    this.repoName="delani_studio"
   }

  getData(): Observable <any> {

    return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.clientId + "&client_secret=" + this.clientSecret)
  }

  getRepo():Observable<any>{

  return this.http.get("https://api.github.com/users/" + this.username + "/repos?client_id=" + this.clientId + "&client_secret=" + this.clientSecret)
}

searchRepo() {
  return this.http.get('https://api.github.com/search/repositories?q=' + this.repoName, ({
    headers: new HttpHeaders({Authorization: `access_token ${this.apiKey}`})
  }))
}

 

  updateUser(username:string) {
    this.username = username;
  }

  updateRepo(repo:string) {
    this.repoName = repo;
  }

}
