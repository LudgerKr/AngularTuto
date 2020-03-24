import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

const config = {
  headers: {
    // tslint:disable-next-line:max-line-length
    Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE1ODUwMzcyNDYsInVzZXJuYW1lIjoiYWRtaW5AYWRtaW4uY29tIiwiZXhwIjoxOTQ1MDM3MjQ2fQ.J-ssiLj7GQBzScxoPyEhZri_ehpqEzu7J4itWllEdN7XaOd2ipnw2eNZRHj60_CTof1h-SGJtikohHUZv9y_BKniaXI_FBgqP79q8-_bzaYKza5P-imlcKMnQvBUgfqeFBxSOZv8vupwsXdKjP2nDX0S8gyQdT2qdEQXmjanw9kMprv_R3osXJ6EYc0DfnWxaaUPXnwstymqKeZBIFLKvbBche9cOT4KUuZFNpkRxWaEBliy2ER6uCLYvhNDbANyvcFq6B85SEOYVrQBwiU3OlRdPyo51EEDM1KBsjMrdLyMYRhCezOHOaP3pQC6FruCvSP-LClv8rSii31_y74qBSwNHDMCQmqX-AaSLoovGYaTPqzJuPhRLuDW89yYzlz4Y-HCr3lsf6cQkiw7QFSxPsiISEJ5judW1liTg5xuY9vAo0mrQs6n4k03nfZ0b8ZHY2i0iwwXgtrF9XQi-NUsXItPrODoJu6hezdgxBoDJWd2kpnHzWIIrGocICvH5Vvd0eAUQ9w70T7inGlSlqU6kqOhZippcGMJwbBPy7azhyOBaTHg4tY9k2opWdE5DTGaS0H1ZOtXcl3k7MEgX-SQctj4o_igHrLRIzKit30AfJnO4aXOBpxxItRlS_VMskKlPgF_A_9-e657yJlnRqKoCWvJRMjuOJqr5au4IRKt28c',
  }
};



@Injectable({
  providedIn: 'root'
})

export class ArticlesService {

  constructor(private http: HttpClient) { }

  getArticles() {
    return this.http.get('http://127.0.0.1:8000/api/articles', config);
  }

  getArticleById(id: any) {
    return this.http.get('http://127.0.0.1:8000/api/article/' + id, config).map(res => res);
  }

  deleteArticle(id: any) {
    return this.http.delete('http://127.0.0.1:8000/api/article/' + id, config).map(res => res);
  }

  postArticle(values: any) {
    return this.http.post('http://127.0.0.1:8000/api/article', values, config).map(res => res);
  }

  updateArticle(id: any, values: any) {
    return this.http.put('http://127.0.0.1:8000/api/article/' + id, values, config).map(res => res);
  }
}
