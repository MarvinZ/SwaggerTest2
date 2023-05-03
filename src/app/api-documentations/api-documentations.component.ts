import { AfterContentInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import SwaggerUI from 'swagger-ui';


@Component({
  selector: 'app-api-documentations',
  templateUrl: './api-documentations.component.html',
  styleUrls: ['./api-documentations.component.css']
})
export class ApiDocumentationsComponent implements OnInit, AfterContentInit {
  public swaggerUrl = 'https://petstore.swagger.io/v2/swagger.json';

  @ViewChild('customersapidocumentation', { static: true })
  custApiDocElement: ElementRef | undefined;

  constructor() {}

  ngOnInit(): void {}

  ngAfterContentInit(): void {
    const ui = SwaggerUI({
      url: this.swaggerUrl,
      domNode: this.custApiDocElement?.nativeElement,
    });
  }
}

