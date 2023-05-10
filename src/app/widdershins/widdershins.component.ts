import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-widdershins',
  templateUrl: './widdershins.component.html',
  styleUrls: ['./widdershins.component.css']
})
export class WiddershinsComponent implements OnInit {
  myHtmlUrl!: SafeResourceUrl;
  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.myHtmlUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      'assets/testWidder.html'
    );
  }

}
