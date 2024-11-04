import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {SettingsService} from '../../../core/settings.service';
import {JsonPipe} from '@angular/common';

@Component({
  selector: 'app-editor',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    JsonPipe
  ],
  template: `
    <h1 class="text-xl mb-6">Editor</h1>
<div class="flex flex-wrap gap-2 items-centered">
    <input
      type="text"
      class="input input-bordered w-1/3"
      #title
      (input) = "settingsService.setConfig('title',title.value)"
      [value] = "settingsService.config().title"
    >
    <input
      type="color"
      class="input input-bordered w-1/3"
      #color
      (input) = "settingsService.setConfig('color',color.value)"
      [value] = "settingsService.config().color"
    >
  <input type="checkbox"
         class="toggle toggle-success"
         #checked
         [checked]="settingsService.config().enableshop"
         (input) = "settingsService.setConfig('enableshop',checked.checked)"
  >
</div>

  `,
  styles: ``
})
export class EditorComponent {
  settingsService = inject(SettingsService);
}
