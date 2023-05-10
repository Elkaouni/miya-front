import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Config } from '../@config/config';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  public static URL = './assets/config/config.json';
  private _config!: Config;

  constructor(private http: HttpClient ) {}

  public loadConfig() {
    return this.http
      .get(ConfigService.URL)
      .toPromise()
      .then((config: Config | undefined) => {
        this._config = config! ;
        this._config.enviName = config!.enviName?.toUpperCase();
      })
      .catch((err: any) => {
        console.error(err);
      });
  }

  get config(): Config {
    return this._config;
  }
}
