import { Component, OnInit } from '@angular/core';
import { ScullyRoutesService } from '@scullyio/ng-lib';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Article {
  route: string;
  title: string;
  description: string;
  date: Date;
  categories: string[];
}

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {
  list = [1, 2, 3, 4, 5, 6];
  list$: Observable<Article[]>;

  constructor(public scully: ScullyRoutesService) {}

  ngOnInit() {
    this.list$ = this.scully.available$.pipe(
      map((items: Article[]) => items.filter(item => item.route !== '/'))
    );
  }
}
