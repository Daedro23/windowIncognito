# Algunas aclaraciones:

 - Se utilizo la librería ng-lazyload-image para la carga de imagenes (https://www.npmjs.com/package/ng-lazyload-image)
 - Manejo el nativeElement para el manejo de los controles del video sin necesidad de aplicar una librería externa
 - Se obtienen los valores requeridos en el archivo de dataService, se hace un POST con una url de prueba con los datos
 - Detecta si el usuario esta navegando en modo incognito o por una variable la cual se envía en el metodo POST
 - Implemetación de SCSS
 - Se obtiene un valor para así guardarlo por localstorage así se recuerda al momento de volver, mostrando true si es primera y false la subsecuentes
 - Responsive por medio de Grid con los breakpoints requeridos

# Proyect

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.7.

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
