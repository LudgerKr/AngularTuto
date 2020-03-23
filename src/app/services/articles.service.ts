import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

const config = {
  headers: {
    // tslint:disable-next-line:max-line-length
    Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE1ODQ5NTA3NzUsInVzZXJuYW1lIjoiYWRtaW5AYWRtaW4uY29tIiwiZXhwIjoxNTg0OTg2Nzc1fQ.PdotXZXrpfCdW7nDvKEP3HP1Ni_ZzHmMcGTBWoMV6MJFlw_POk3yRwdGaxIdbrcUTBELakUY--MbsQJduIFqQ6cS02EG76ZArWxb63tcVbMZ9TnYfBONO2Rz0dFtpQ6yDQi3NWhDqkTRRoxNAV5BNP_dFJ5Stg9yOq_lC35I7hJbfBE1kMjdl0cSCoPiGkdg1Up0ml3d30NiqRhjjYd6EN4IxbyogTww2YS0sz6GjK8aWDJbP9heWM9nrgGPogygSpCzPmiF3y22-d86pY_l10cGYSOKB0Q9AYEDkDbMJttVUKI5RIdO2LBT-sIFe76tdGl8Qhz9qxdZccYw73BQ9wqvVwOVWMq7DdlBqDGlxZBvXek19UCdS5DoGkgX40cqcX-nyuCipI60ydDATY1jFDuLZ9K6xRKYRXsNUlJ02y5LzYx65qqsqd9zZKJvMFi9OEuqFK3i3UOLhuWbZS_iBB10duOdoeOQhzxW0kpZQLqUcZFbbOgoiG6VJgIkM82xu2-EGw6M54dEQQ6roTQhCJ0sP_arkhPtE_8_slix4rrtKrYyIgDBSowfAWM--va_BDL0OH7bzc0JyBis_Ku2BwlUw6ydKvsRWV7W8RsKSNENgdptpD4uYDQXOd2CDpElVxkvPlR7kJzxPBUGIFsacZ0xUmibf9-OUvCYLX51HSI',
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

  editArticle(id: any) {
    return this.http.put('http://127.0.0.1:8000/api/article/' + id, config).map(res => res);
  }
}
