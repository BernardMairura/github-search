import { Component, OnInit } from '@angular/core';
import {GithubService } from 'src/app/services/github.service';
import {Repo} from 'src/app/repo'

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {
  repo:any[];
  repoName:string;"delani_studio"

  constructor(private githubService:GithubService) { 
    console.log('repo service ready');
  }
  
  

  findRepo(){
    this.githubService.updateRepo(this.repoName);
    this.githubService.searchRepo().subscribe((repo)=>{
      console.log(this.repo);
      this.repo=repo["items"];
    });
  }
  ngOnInit(){
  this.findRepo()
  }

}
