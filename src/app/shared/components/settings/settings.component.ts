import { Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { fromEvent, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { Settings } from '../../../shared/types/settings';
import { getSettings, saveSettings } from '../../../@util/app/settings';

import { HomeService, HomeContext } from '../../../routes/home/home.component';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit, OnDestroy {
  @Input() open = false;

  @ViewChild('modalRef') modalRef!: ElementRef;

  settings: Settings = getSettings();
  state: Settings = { ...this.settings };

  private subscriptions: Subscription[] = [];

  constructor(
    private translate: TranslateService,
    private homeService: HomeService,
  ) {}

  ngOnInit(): void {
    const mouseDown$ = fromEvent<MouseEvent>(window, 'mousedown');
    const mouseUp$ = fromEvent<MouseEvent>(window, 'mouseup');
    const modalRef = this.modalRef.nativeElement;

    this.subscriptions.push(
      mouseDown$.subscribe((e) => {
        if (modalRef && !modalRef.contains(e.target as Node)) {
          this.subscriptions.push(
            mouseUp$.pipe(debounceTime(100)).subscribe(() => this.close()),
          );
        }
      }),
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }

  changeTheme(theme: string): void {
    this.state.theme = theme;
  }

  save(): void {
    this.homeService.updateLightMode(this.state.theme);
    saveSettings(this.state);
    this.close();
  }

  close(): void {
    this.state = { ...this.settings };
    this.open = false;
  }

  getThemeTranslation(theme: string): string {
    return this.translate.instant(`settings.${theme}Mode`);
  }
}