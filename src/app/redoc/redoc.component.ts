import { Component, OnInit } from '@angular/core';

declare var Redoc: any;

@Component({
  selector: 'app-re-doc',
  templateUrl: './redoc.component.html',
  styleUrls: ['./redoc.component.css']
})
export class ReDocComponent implements OnInit {
  public swaggerUrl = 'https://petstore.swagger.io/v2/swagger.json';

  constructor() { }

  ngOnInit(): void {
    this.initDocs();
  }

  initDocs() {
    Redoc.init(this.swaggerUrl, {
      scrollYOffset: 60,
      hideDownloadButton: true
    }, document.getElementById('redoc'));
  }
}
