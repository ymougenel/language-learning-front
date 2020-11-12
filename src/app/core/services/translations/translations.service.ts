import {Injectable} from '@angular/core';
import {HttpClientConfig} from "../http-client-config";
import {Observable} from "rxjs";

@Injectable({ providedIn: 'root' })
export class TranslationsService {

  constructor(private readonly _config: HttpClientConfig) {
  }

  getTranslations(count: number) : string {
    // return null;
    return this._config.baseUrl;
  }
}
