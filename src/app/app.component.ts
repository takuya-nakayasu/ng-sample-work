import { Component } from '@angular/core';
import { BasicService } from './services/basic.service';
import { SampleErrorHandler } from './services/sample-error-handler.service';
import { SampleService } from './services/sample.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private sampleErrorHandler: SampleErrorHandler) {
    this.sampleErrorHandler.openErrorWindow();
  }
}
