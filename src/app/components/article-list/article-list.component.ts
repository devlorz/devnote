import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ScullyRoutesService } from '@scullyio/ng-lib';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Article } from 'src/app/interface';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {
  list$: Observable<Article[]>;

  constructor(public scully: ScullyRoutesService, private router: Router) {}

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
