import { Component } from '@angular/core';
import { IdleMonitorService, ScullyRoutesService } from '@scullyio/ng-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'devnote';

  constructor(
    private idle: IdleMonitorService,
    public scully: ScullyRoutesService
  ) {}

  // ngOnInit() {
  // this.scully.allRoutes$.subscribe(res => console.log(res));
  // this.scully.available$.subscribe(res => console.log(res));
  // this.scully.topLevel$.subscribe(res => console.log(res));
  // }
}
