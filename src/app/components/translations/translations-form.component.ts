import { Component, OnInit } from '@angular/core';
import {Translation} from "../../core/models/translations";
import {Translations} from "../../core/models/mock/translation-mock";

@Component({
  selector: 'app-translations-form',
  templateUrl: './translations-form.component.html',
  styleUrls: ['./translations-form.component.scss']
})
export class TranslationsFormComponent implements OnInit {


  // constructor(private translationsService: TranslationsService) { }
  constructor() { }

  private translations: Translation[];
  ngOnInit() {
    this.translations = Translations;
  }

}
