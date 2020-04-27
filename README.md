# Angular Preloading Strategy
This is demo project for Preloading Strategy in Angular 8.
Angular Preloading Strategy is yet another way to speed up the load time of the Angular Apps. 
We build Modular apps using the Angular Modules. The Angular loads all the modules, when the user requests for the first time. This will make app loading slowly as it need to download all the modules. We can solve this problem by lazy loading those modules. 
The Angular allows us further optimize our app using a technique called PreLoading.
I have build a custom Preloading strategy so as to fully control what gets lazy loaded and what gets Preloaded.

Applies to: Angular 2, Angular 4, Angular 5, Angular 6, Angular 7, Angular 8. Angular 9

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.9.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
