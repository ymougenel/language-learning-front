import { Component, OnInit } from '@angular/core';
import {Translation} from "../../core/models/translations";
import {Translations} from "../../core/models/mock/translation-mock";
import {TranslationsService} from "../../core/services/translations/translations.service";

@Component({
  selector: 'app-translations-form',
  templateUrl: './translations-form.component.html',
  styleUrls: ['./translations-form.component.scss']
})
export class TranslationsFormComponent implements OnInit {


  constructor(private translationsService: TranslationsService) { }

  public translations: Translation[];
  ngOnInit() {
    this.translations = Translations;
  }

}
