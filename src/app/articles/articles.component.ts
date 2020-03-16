import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../articles.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

  articles;

  constructor(private articlesService: ArticlesService) { }

  ngOnInit(): void {
    this.articles = this.articlesService.getArticles();
  }

}
