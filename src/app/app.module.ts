import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ApiDocumentationsComponent } from './api-documentations/api-documentations.component';
import { RedocModule } from './redoc/redoc.module'; // Import RedocModule
import { ReDocComponent } from './redoc/redoc.component';
import { AglioComponent } from './aglio/aglio.component';

const routes: Routes = [
  { path: '', redirectTo: '/swagger', pathMatch: 'full' },
  { path: 'swagger', component: ApiDocumentationsComponent },
  { path: 'aglio', component: AglioComponent },
  { path: 'redoc', component: ReDocComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ApiDocumentationsComponent,
    ReDocComponent,
    AglioComponent
    // ReDocComponent // Add ReDocComponent to declarations
  ],
  imports: [
    BrowserModule,
    // RedocModule, // Add RedocModule to imports
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
