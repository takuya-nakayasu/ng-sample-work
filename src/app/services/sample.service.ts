import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SampleService {
  constructor() {
    console.log('create sampleService');
  }
}
