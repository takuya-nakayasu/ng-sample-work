import { ErrorHandler, Injectable } from '@angular/core';

@Injectable()
export class SampleErrorHandler implements ErrorHandler {
  public handleError(error: any): void {
    console.error(error);
  }

  public openErrorWindow(): void {
    window.alert('エラーが発生しました');
  }
}
