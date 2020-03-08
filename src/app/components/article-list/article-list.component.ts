import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ScullyRoutesService } from '@scullyio/ng-lib';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Article } from 'src/app/interface';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {
  list$: Observable<Article[]>;

  constructor(
    public scully: ScullyRoutesService,
    private router: Router,
    private meta: Meta,
    private title: Title
  ) {
    this.title.setTitle('DevNote - Brief stories for developers');
    this.meta.updateTag({ name: 'title', content: 'DevNote' });
    // this.meta.updateTag({ name: 'og:type', content: 'article' });
    this.meta.updateTag({ name: 'og:title', content: 'DevNote' });
    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({ name: 'twitter:title', content: 'DevNote' });
    this.meta.updateTag({
      name: 'description',
      content: 'DevNote - Brief story for developers'
    });
    this.meta.updateTag({
      name: 'og:description',
      content: 'DevNote - Brief story for developers'
    });
    this.meta.updateTag({
      name: 'twitter:description',
      content: 'DevNote - Brief story for developers'
    });
    this.meta.updateTag({ name: 'author', content: 'DevNote' });
  }

  ngOnInit() {
    this.list$ = this.scully.available$.pipe(
      map((items: Article[]) =>
        items
          .filter(item => item.route !== '/')
          .sort((a, b) => {
            const dateA = new Date(a.date);
            const dateB = new Date(b.date);
            return dateB.getTime() - dateA.getTime();
          })
      )
    );
  }

  onClick(route: string) {
    this.router.navigateByUrl(route);
  }
}
