import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiDocumentationsComponent } from './api-documentations/api-documentations.component';

const routes: Routes = [
  { path: '', redirectTo: '/swagger', pathMatch: 'full' },
  { path: 'swagger', component: ApiDocumentationsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
