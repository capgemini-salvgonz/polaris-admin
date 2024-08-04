# PolarisAdmin

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build --prod` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


## Project structure

polaris-admin/
│
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── navbar/
│   │   │   │   ├── navbar.component.ts
│   │   │   │   ├── navbar.component.html
│   │   │   │   ├── navbar.component.css
│   │   │   │   └── navbar.component.spec.ts
│   │   │   ├── login/
│   │   │   │   ├── login.component.ts
│   │   │   │   ├── login.component.html
│   │   │   │   ├── login.component.css
│   │   │   │   └── login.component.spec.ts
│   │   │   ├── dashboard/
│   │   │   │   ├── dashboard.component.ts
│   │   │   │   ├── dashboard.component.html
│   │   │   │   ├── dashboard.component.css
│   │   │   │   └── dashboard.component.spec.ts
│   │   │   ├── user-management/
│   │   │   │   ├── user-list/
│   │   │   │   │   ├── user-list.component.ts
│   │   │   │   │   ├── user-list.component.html
│   │   │   │   │   ├── user-list.component.css
│   │   │   │   │   └── user-list.component.spec.ts
│   │   │   │   ├── user-detail/
│   │   │   │   │   ├── user-detail.component.ts
│   │   │   │   │   ├── user-detail.component.html
│   │   │   │   │   ├── user-detail.component.css
│   │   │   │   │   └── user-detail.component.spec.ts
│   │   ├── services/
│   │   │   ├── auth.service.ts
│   │   │   ├── user.service.ts
│   │   │   ├── report.service.ts
│   │   ├── models/
│   │   │   ├── user.model.ts
│   │   │   ├── report.model.ts
│   │   ├── core/
│   │   │   ├── http-interceptor.service.ts
│   │   │   ├── auth-guard.service.ts
│   │   │   ├── core.module.ts (si se usa)
│   │   ├── shared/
│   │   │   ├── directives/
│   │   │   │   ├── custom-directive.directive.ts
│   │   │   ├── pipes/
│   │   │   │   ├── custom-pipe.pipe.ts
│   ├── assets/
│   │   ├── images/
│   │   ├── icons/
│   │   └── styles/
│   ├── environments/
│   │   ├── environment.ts
│   │   ├── environment.prod.ts
│   ├── main.ts
│   ├── bootstrap.ts
│   ├── index.html
│   └── styles.css
├── angular.json
├── package.json
├── tsconfig.json
└── README.md
