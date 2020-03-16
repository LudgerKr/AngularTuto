import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor(private http: HttpClient) { }

  getArticles() {
    return this.http.get('http://127.0.0.1:8000/api/articles');
  }

  getArticleById(id: number) {
    return this.http.get('http://127.0.0.1:8000/api/article/' + id)
  }
}
