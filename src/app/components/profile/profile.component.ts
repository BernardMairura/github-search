import { Component, OnInit ,Input} from '@angular/core';
import {GithubService} from 'src/app/services/github.service'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: any;
  userRepos:any;
  username: string = 'BernardMairura'
  imageWidth: number = 150;
  imageHeight: number = 200;

  constructor(private githubService:GithubService) {
    console.log ('service is ready')
   }


  getUsers(){

    this.githubService.UpdateUser(this.username);

    this.githubService.getData().subscribe((user)=>{
      console.log(user)
      this.user=user;
    });
  }
  
  ngOnInit(){
    this.getUsers()
  }
}



