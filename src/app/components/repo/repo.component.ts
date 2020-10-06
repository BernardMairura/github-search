import { Component, OnInit } from '@angular/core';
import {GithubService } from 'src/app/services/github.service'
import {Repo} from 'src/app/repo'

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {
  repo:Repo;
  username:string;

  constructor(private githubService:GithubService) { 
    console.log('repo service ready');
  }
  
  

  /*findRepo(){
    this.githubService.updateRepo(this.username);
    this.githubService.getRepo().subscribe((repo)=>{
      console.log(this.repos);
      this.repos=repo["items"];
    });*/

    findRepo(){
      this.githubService.updateRepo(this.username);
      this.githubService.repoRequest();
      this.repo=this.githubService.repo
  }
  

  ngOnInit(){
  this.findRepo()
  }

}
