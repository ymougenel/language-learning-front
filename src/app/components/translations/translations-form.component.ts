import {Component, OnInit} from '@angular/core';
import {Translation} from "../../core/models/translations";
import {TranslationsService} from "../../core/services/translations/translations.service";

@Component({
  selector: 'app-translations-form',
  templateUrl: './translations-form.component.html',
  styleUrls: ['./translations-form.component.scss']
})
export class TranslationsFormComponent implements OnInit {


  constructor(private translationsService: TranslationsService) {
  }

  private translationCount = 10;

  public translations: Translation[];
  public answers: Translation[] = [];
  public correctionMode = false;


  ngOnInit() {
    this.getTranslations();
    this.hideTranslation();
  }

  getTranslations() {
    this.translations = this.translationsService.getTranslations(this.translationCount);
    this.answers = [];
    this.translations.forEach(val => this.answers.push(Object.assign({}, val)));
  }

  hideTranslation() {
    for (let translation of this.translations) {
      let rand = Math.floor(Math.random() * 2);
      if (rand) {
        translation.word1="";
        translation.word2=null;
      }
      else {
        translation.word1=null;
        translation.word2="";
      }
    }
  }

  validateTranslations() {
    console.log(this.translations[0]);
    console.log(this.answers[0]);
    this.correctionMode=true;
  }
}
