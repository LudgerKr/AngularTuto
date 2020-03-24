import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {ArticlesService} from '../../services/articles.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-edit-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.scss']
})
export class CreateArticleComponent implements OnInit {

    id: any;
    data: any;

  constructor(private articlesService: ArticlesService, private router: Router) { }

  ngOnInit(): void {
  }

  createArticle(form: NgForm) {
    this.articlesService.postArticle(form.value).subscribe( (val) => {
          console.log('POST call successful value returned in body',
              val);
        },
        response => {
          console.log('POST call in error', response);
        },
        () => {
          console.log('The POST observable is now completed.');
        });
    this.router.navigate(['/articles']);
  }

  updateArticle(id: any, form: NgForm) {
    this.articlesService.updateArticle(id, form.value).subscribe( data => {
        this.data = data;
        },
        (val) => {
            console.log('UPDATE call successful value returned in body',
                val);
        },
        () => {
            console.log('The UPDATE observable is now completed.');
        });
    this.router.navigate(['/articles']);
  }


}
