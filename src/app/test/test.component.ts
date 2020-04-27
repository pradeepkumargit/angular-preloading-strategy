import { Component } from '@angular/core';
import { CustomPreloadingStrategy } from '../custom-preloading-strategy.service';
 
  @Component({
    template: `<h1>Test Component</h1>`,
  })
  export class TestComponent {
    title = '';
    modules: string[];

    constructor(       
        preloadStrategy: CustomPreloadingStrategy
    ) {
        this.modules = preloadStrategy.preloadedModules;
    }
  }