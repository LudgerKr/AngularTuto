import { Component, OnInit } from '@angular/core';
import { articleService } from '../articles.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-single-article',
  templateUrl: './single-article.component.html',
  styleUrls: ['./single-article.component.scss']
})
export class SingleArticleComponent implements OnInit {

  title     = 'Title';
  content   = 'Content';
  weight    = 'Weight';
  height    = 'Height';
  width     = 'Width';
  length    = 'Length';
  stock     = 'Stock';
  price     = 'Price';

  constructor(private articleService: articleService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    const articleService = this.articleService.getArticleById(+id);

    if (articleService != null) {
      this.title    = this.articleService.getArticleById(+id).title;
      this.content  = this.articleService.getArticleById(+id).content;
      this.weight   = this.articleService.getArticleById(+id).weight;
      this.height   = this.articleService.getArticleById(+id).height;
      this.width    = this.articleService.getArticleById(+id).width;
      this.length   = this.articleService.getArticleById(+id).length;
      this.stock    = this.articleService.getArticleById(+id).length;
      this.price    = this.articleService.getArticleById(+id).price;
    } else {
      this.router.navigate(['not-found']);
    }
  }

}
