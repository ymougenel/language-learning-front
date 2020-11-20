import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TranslationsFormComponent} from "./components/quizz/translations-form.component";
import {TranslationsListComponent} from "./components/translations-list/translations-list.component";


const routes: Routes = [
  {path: '', redirectTo: '/quizz', pathMatch: 'full'},
  {path: 'quizz', component: TranslationsFormComponent},
  {path: 'translations', component: TranslationsListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
