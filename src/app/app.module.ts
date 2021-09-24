import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BasicService } from './services/basic.service';
import { SampleErrorHandler } from './services/sample-error-handler.service';
import { SampleService } from './services/sample.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [
    // SampleService,
    // { provide: BasicService, useClass: SampleService },
    { provide: ErrorHandler, useClass: SampleErrorHandler },
    { provide: SampleErrorHandler, useExisting: ErrorHandler },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
