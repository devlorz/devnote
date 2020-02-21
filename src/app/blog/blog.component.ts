import { Article } from '../interface';
import { Component, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, ROUTES } from '@angular/router';
import { ScullyRoutesService } from '@scullyio/ng-lib';
import { Subscription, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

declare var ng: any;

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  preserveWhitespaces: true,
  encapsulation: ViewEncapsulation.Emulated
})
export class BlogComponent implements OnInit {
  data$: Observable<Article>;

  ngOnInit() {
    this.data$ = this.scully
      .getCurrent()
      .pipe(tap(res => console.log(res))) as Observable<Article>;
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private scully: ScullyRoutesService
  ) {}
}
