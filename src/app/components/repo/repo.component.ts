import { Component, OnInit } from '@angular/core';
import {GithubService } from 'src/app/services/github.service'

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {
  repoitems:any[];
  reponame:string="delani_studio"

  constructor(private githubService:GithubService) { }

  getRepos(){
    this.githubService.UpdateRepo(this.reponame);

    this.githubService.getRepo().subscribe((repo)=>{
      this.repoitems=repo["items"];
    });
  }
  

  ngOnInit(){
    this.getRepos()
  }

}
