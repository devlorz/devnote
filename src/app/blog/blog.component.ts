import { environment } from './../../environments/environment';
import { HighlightService } from './../highlight.service';
import { Article } from '../interface';
import {
  Component,
  OnInit,
  ViewEncapsulation,
  OnDestroy,
  AfterViewChecked
} from '@angular/core';
import { ActivatedRoute, Router, ROUTES } from '@angular/router';
import { ScullyRoutesService } from '@scullyio/ng-lib';
import { Subscription, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Title, Meta } from '@angular/platform-browser';

declare var ng: any;

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  preserveWhitespaces: true,
  encapsulation: ViewEncapsulation.Emulated
})
export class BlogComponent implements OnInit, AfterViewChecked {
  data$: Observable<Article>;

  ngOnInit() {
    this.data$ = this.scully.getCurrent().pipe(
      tap(res => console.log(res)),
      tap((res: Article) => {
        this.title.setTitle(res.title);
        this.meta.updateTag({ name: 'title', content: res.title });
        // this.meta.updateTag({ name: 'og:type', content: 'article' });
        this.meta.updateTag({ name: 'og:title', content: res.title });
        this.meta.updateTag({
          name: 'twitter:card',
          content: 'summary_large_image'
        });
        this.meta.updateTag({ name: 'twitter:title', content: res.title });
        this.meta.updateTag({
          name: 'description',
          content: res.description
        });
        this.meta.updateTag({
          name: 'og:description',
          content: res.description
        });
        this.meta.updateTag({
          name: 'twitter:description',
          content: res.description
        });
        this.meta.updateTag({ name: 'author', content: 'Nutti Saelor' });
        this.meta.updateTag({
          name: 'og:image',
          content: `${environment.webUrl}${res.image}`
        });
        this.meta.updateTag({
          name: 'twitter:image:src',
          content: `${environment.webUrl}${res.image}`
        });
      })
    ) as Observable<Article>;
  }

  ngAfterViewChecked() {
    this.highlightService.highlightAll();
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private scully: ScullyRoutesService,
    private highlightService: HighlightService,
    private title: Title,
    private meta: Meta
  ) {}
}
