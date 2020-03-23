import {Component, Input, OnInit} from '@angular/core';
import { ArticlesService } from '../services/articles.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

  articles;
  @Input() id: number;

  constructor(private articlesService: ArticlesService) { }

  ngOnInit(): void {
    this.articles = this.articlesService.getArticles();
  }

}
