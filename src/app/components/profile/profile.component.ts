import { Component, OnInit } from '@angular/core';
import {GithubService} from 'src/app/services/github.service'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  users:string[]

  constructor(private githubService:GithubService) { }

  getUsers(){

    this.githubService.getData().subscribe((data)=>{
      console.log(data)
    })
  }

  ngOnInit(): void {
  }

}
