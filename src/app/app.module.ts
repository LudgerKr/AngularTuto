import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule} from '@angular/forms';
import { AuthService } from './services/auth.service';
import { AuthComponent } from './auth/auth.component';
import { RouterModule, Routes } from '@angular/router';
import { SingleArticleComponent } from './single-article/single-article.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { AuthGuard } from './services/auth-guard.service';
import { ArticlesComponent } from './articles/articles.component';
import { HttpClientModule } from '@angular/common/http';
import { ArticlesService } from './services/articles.service';


const appRoutes: Routes = [
  { path: 'articles', canActivate: [AuthGuard], component: ArticlesComponent },
  { path: 'articles/:id', canActivate: [AuthGuard], component: SingleArticleComponent },
  { path: 'articles/edit/:id', canActivate: [AuthGuard], component: EditArticleComponent },
  { path: '', component: AuthComponent },
  { path: 'not-found', component: FourOhFourComponent },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    SingleArticleComponent,
    FourOhFourComponent,
    ArticlesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [
    ArticlesService,
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
