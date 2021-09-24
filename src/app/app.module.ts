import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BasicService } from './services/basic.service';
import { SampleService } from './services/sample.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [
    SampleService,
    { provide: BasicService, useClass: SampleService },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
