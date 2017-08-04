import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github/github.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers:[GithubService]
})
export class SearchComponent implements OnInit {

  constructor(private githubService: GithubService) { }

  ngOnInit() {
    this.githubService.getUser();
  }

}
