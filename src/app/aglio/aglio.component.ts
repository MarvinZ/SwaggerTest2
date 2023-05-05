import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-aglio',
  templateUrl: './aglio.component.html',
  styleUrls: ['./aglio.component.css'],
})
export class AglioComponent implements OnInit {
  public swaggerUrl = 'https://petstore.swagger.io/v2/swagger.json';

  myHtmlUrl!: SafeResourceUrl;
  iframeWidth = '1200px';
  iframeHeight = '1500px';

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.myHtmlUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      'assets/petstore.html'
    );
  }
}
