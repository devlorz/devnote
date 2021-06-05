import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent {
  @Input() title: string;
  @Input() description: string;
  @Input() date: Date;
  @Input() imgSrc: string;
  @Output() clicked = new EventEmitter();

  constructor() {}
}
