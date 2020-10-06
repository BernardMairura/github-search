import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http'
import {environment} from 'src/environments/environment'
import {Repo} from 'src/app/repo';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  repo:Repo;
  username:string;
  reponame:string
  clientId:string='60127b19fadef7d5c02e'
  clientSecret:string='73e80b9d31344d306be88a6116f2d9bd8edab29d'

  constructor( private http:HttpClient) {
    this.username="BernardMairura"
    this.reponame="delani_studio"
   }

  getData(): Observable <any> {

    return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.clientId + "&client_secret=" + this.clientSecret)
  }

  getRepo():Observable<any>{

  return this.http.get("https://api.github.com/users/" + this.username + "/repos?client_id=" + this.clientId + "&client_secret=" + this.clientSecret)
}

repoRequest(){
  interface ApiResponse{
       name:string;
        description:string;
        html_url:string;

       }

    let promise = new Promise((resolve,reject)=>{
      this.http.get<ApiResponse>(environment.apiUrl+ this.username + environment.apiRepos).toPromise().then(response=>{
        this.repo.name=response.name
        this.repo.description=response.description
        this.repo.html_url=response.html_url

      resolve()
       },
       error =>{
         this.repo.name = "Error - Unable to get Repo"
         reject(error)
       }
     )
   })
       return promise

  }

  updateUser(username:string) {
    this.username = username;
  }

  updateRepo(repos:string) {
    this.reponame = repos;
  }

}
