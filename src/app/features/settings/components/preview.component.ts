import {Component, inject} from '@angular/core';
import {SettingsService} from '../../../core/settings.service';
import {JsonPipe} from '@angular/common';

@Component({
  selector: 'app-preview',
  standalone: true,
  imports: [
    JsonPipe
  ],
  template: `
    <h1 class="text-xl mb-6">Preview</h1>
    <div
      class="text-2xl"
      [style.color] = "settingsService.color()"
    >
      {{ settingsService.title() }}</div>

  `,
  styles: ``
})
export class PreviewComponent {
settingsService = inject(SettingsService);
}
