import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TranslationsFormComponent} from "./components/translations/translations-form.component";


const routes: Routes = [
  {path: '', redirectTo: '/translations', pathMatch: 'full'},
  {path: 'translations', component: TranslationsFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
