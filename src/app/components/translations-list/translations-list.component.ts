import { Component, OnInit } from '@angular/core';
import {TranslationsService} from "../../core/services/translations/translations.service";
import {Translation} from "../../core/models/translations";
import * as _ from "lodash"
@Component({
  selector: 'app-translations-list',
  templateUrl: './translations-list.component.html',
  styleUrls: ['./translations-list.component.scss']
})
export class TranslationsListComponent implements OnInit {

  constructor(private translationsService: TranslationsService) { }
  public translations;

  ngOnInit(): void {
    this.getAllTranslations();
  }

  getAllTranslations() {
    //TODO handle pagination
    this.translations = this.translationsService.getTranslations(1000);
    this.translations = _.groupBy(this.translations, function(b) { return b.category});
    console.log(this.translations)
  }

}
