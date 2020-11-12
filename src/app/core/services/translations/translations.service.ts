import {Injectable} from '@angular/core';
import {HttpClientConfig} from "../http-client-config";
import {Observable} from "rxjs";
import {Translations} from "../../models/mock/translation-mock";
import {Translation} from "../../models/translations";

@Injectable({providedIn: 'root'})
export class TranslationsService {

  constructor(private readonly _config: HttpClientConfig) {
  }

  getTranslations(count: number): Translation[] {
    return Translations.sort(() => 0.5 - Math.random()).slice(0, count);
  }
}
