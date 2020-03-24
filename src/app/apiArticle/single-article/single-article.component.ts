import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../../services/articles.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-single-article',
  templateUrl: './single-article.component.html',
  styleUrls: ['./single-article.component.scss']
})
export class SingleArticleComponent implements OnInit {

  constructor(private articleService: ArticlesService, private route: ActivatedRoute) { }

  form: any;
  data: any;
  id: any;

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.getArticleById();
  }

  getArticleById() {
    this.articleService.getArticleById(this.id).subscribe(data => {
      this.data = data;
    });
  }

  deleteArticle() {
    if (confirm('Etes-vous sûr de vouloir supprimer cet article ?')) {
      this.articleService.deleteArticle(this.id).subscribe(data => {
        this.data = data;
      });
    } else {
      return null;
    }
  }
}
