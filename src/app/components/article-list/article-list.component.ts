import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ScullyRoutesService } from '@scullyio/ng-lib';
import { Observable } from 'rxjs';
import { map, share } from 'rxjs/operators';
import { Article } from 'src/app/interface';
import { Meta } from '@angular/platform-browser';

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
    private meta: Meta
  ) {
    this.meta.addTags([
      { name: 'title', content: 'DevNote' },
      { name: 'og:title', content: 'DevNote' },
      { name: 'twitter:title', content: 'DevNote' },
      { name: 'description', content: 'DevNote - Brief story for developers' },
      {
        name: 'og:description',
        content: 'DevNote - Brief story for developers'
      },
      {
        name: 'twitter:description',
        content: 'DevNote - Brief story for developers'
      },
      { name: 'twitter:card', content: 'summary' }
    ]);
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
