import { Component, OnInit } from '@angular/core';
// import { RedocOptions, RedocStandalone } from 'redoc';

@Component({
  selector: 'app-re-doc',
  templateUrl: './redoc.component.html',
  styleUrls: ['./redoc.component.css']
})
export class ReDocComponentM implements OnInit {
  public swaggerUrl = 'https://petstore.swagger.io/v2/swagger.json';

  constructor() { }

  ngOnInit(): void {
    // const redocConfig: RedocOptions = {
    //   scrollYOffset: 50,
    //   hideLoading: true
    // };
    // const redoc = new RedocStandalone(redocConfig, null);
    // redoc.init(this.swaggerUrl, {}, document.getElementById('redoc-container'));
  }
}
