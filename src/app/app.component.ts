import { Component } from '@angular/core';
import { BasicService } from './services/basic.service';
import { SampleService } from './services/sample.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ng-sample-work';
  constructor(
    private sampleService: SampleService,
    private basicService: BasicService
  ) {}
}
