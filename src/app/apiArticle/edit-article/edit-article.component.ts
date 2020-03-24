import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {ArticlesService} from '../../services/articles.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.scss']
})
export class EditArticleComponent implements OnInit {

    id: any;
    data: any;

  constructor(private articlesService: ArticlesService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
      this.id = this.route.snapshot.params.id;
      this.getArticleById();
  }

    getArticleById() {
        this.articlesService.getArticleById(this.id).subscribe(data => {
            this.data = data;
        });
    }

    updateArticle(id: any, form: NgForm) {
      this.articlesService.updateArticle(id, form.value).subscribe(data => {
              this.data = data;
          },
          (val) => {
              console.log('UPDATE call successful value returned in body',
                  val);
          },
          () => {
              console.log('The UPDATE observable is now completed.');
          });
      this.router.navigate(['/articles/' + id]);
    }
}
