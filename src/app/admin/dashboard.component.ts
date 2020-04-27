import { Component } from '@angular/core';
import { CustomPreloadingStrategy } from '../custom-preloading-strategy.service';

@Component({
    template: `<h1>Dashboard Component</h1>`,
})
export class DashboardComponent {
    modules: string[];

    constructor(       
        preloadStrategy: CustomPreloadingStrategy
    ) {
        this.modules = preloadStrategy.preloadedModules;
    }
}