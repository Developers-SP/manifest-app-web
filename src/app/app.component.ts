import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'body[app]',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent implements OnInit {

  constructor(
    private translate: TranslateService
  ) { }

  ngOnInit() {
    this.translate.setDefaultLang('pt');
    this.translate.use('pt');
  }

}
