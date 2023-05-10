import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ApiDocumentationsComponent } from './api-documentations/api-documentations.component';
import { ReDocComponent } from './redoc/redoc.component';
import { AglioComponent } from './aglio/aglio.component';
import { HttpsnippetComponent } from './httpsnippet/httpsnippet.component';
import { RapiDocComponent } from './rapi-doc/rapi-doc.component';
import { SpectacleComponent } from './spectacle/spectacle.component';
import { ApidocComponent } from './apidoc/apidoc.component';
import { WiddershinsComponent } from './widdershins/widdershins.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
   { path: 'home', component: HomeComponent},
  { path: 'swagger', component: ApiDocumentationsComponent },
  { path: 'aglio', component: AglioComponent },
  { path: 'redoc', component: ReDocComponent },
  { path: 'httpsnippet', component: HttpsnippetComponent },
  { path: 'spectacle', component: SpectacleComponent },
  { path: 'rapidoc', component: RapiDocComponent },
  { path: 'apidoc', component: ApidocComponent },
  { path: 'widdershins', component: WiddershinsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ApiDocumentationsComponent,
    ReDocComponent,
    AglioComponent,
    HttpsnippetComponent,
    RapiDocComponent,
    SpectacleComponent,
    ApidocComponent,
    WiddershinsComponent,
    HomeComponent
    // ReDocComponent // Add ReDocComponent to declarations
  ],
  imports: [
    BrowserModule,
    // RedocModule, // Add RedocModule to imports
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class AppModule { }
