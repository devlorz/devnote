import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  @Input() title: string;
  @Input() description: string;
  @Input() date: Date;
  @Input() imgSrc: string;

  constructor() {}

  ngOnInit() {}
}
