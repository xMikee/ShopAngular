import { Component } from '@angular/core';
import {EditorComponent} from './components/editor.component';
import {PreviewComponent} from './components/preview.component';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [
    EditorComponent,
    PreviewComponent
  ],
  template: `
    <h1 class="text-3xl text-center">Impostazioni App</h1>

    <div class="block">
      <div class="left">
        <app-editor/>
      </div>
      <div class="right my-6">
        <app-preview/>
      </div>
    </div>

  `,
  styles: ``
})
export default class SettingsComponent {

}
