# Spotify Clone
### Alpha version 

## Content

- [About](#about)
- [Motivation](#motivation)
- [Auth](#auth)
- [Library](#library)
- [Prerequisites](#prerequisites)
- [Settings](#settings)
- [Architecture](#architecture)
- [Arquitetura](#arquitetura)
- [Deploy](#deploy)
- [Version History](#version-history)
- [FAQ](#FAQ)

## About
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.1.

##### Motivation
I would like to improve my Frontend skills, migrating from React to Angular, so I needed an interface to put my new skills into practice. So I cloned a web system that I consume daily, Spotify, since it has an open API to practice http requests.

## Auth
```sh
  UserName: keven
  Password: 123
```

## Library:
    * Project developed with Angular CLI version 15.2.1.
        - NodeJS 18.14.2;
            - UI library:
                Ant Design;
            - Routing library:
                **;
            - State management
                **
            - Unitary tests
                ***
    
## Prerequisites
Necessary that you have installed on your machine:
- Need to install [Node.js](https://nodejs.org/en/download/)
- We recommend the text editor [Visual Studio Code](https://code.visualstudio.com/download), but another one can be used.

## Settings
To start the project follow these steps:

```sh
      window.env = {
        VERSION: '',
        VERSION_DATE: new Date().toLocaleDateString('pt-BR').toString(),
        API URL: '',
      };
```

## Architecture

|    Folder  |                                            Description                                          |
|:----------:|:-----------------------------------------------------------------------------------------------:|

https://whimsical.com/spotify-clone-2qozLeKqsifP8yxH4m99p2

├── src
│   ├── app
│   │   ├── admin 
│   │   │   ├── components
│   │   │   │   ├── shared.component.ts
│   │   │   ├── directives
│   │   │   │   ├── first.directive.ts
│   │   │   │   ├── another.directive.ts
│   │   │   ├── pages
│   │   │   │   ├── dashboard
│   │   │   │   │   ├── dashboard.component.ts
│   │   │   │   ├── rights
│   │   │   │   │   ├── rights.component.ts
│   │   │   │   ├── user
│   │   │   │   │   ├── user.component.ts
│   │   │   │   ├── admin.component.ts
│   │   │   │   ├── admin.component.html
│   │   │   │   ├── admin.component.css
│   │   │   │   ├── index.ts
│   │   │   ├── pipes
│   │   │   │   ├── first.pipe.ts
│   │   │   │   ├── another.pipe.ts
│   │   │   ├── admin.module.ts
│   │   │   ├── admin.routing.module.ts
│   │   │   ├── index.ts
│   │   │   │
│   ├── assets

## Deploy

  
## Version History

* 0.0.0 (11/04/2023)
  - New project
	
<a href="https://www.flaticon.com/free-icons/theme" title="theme icons">Theme icons created by JessiGue - Flaticon</a>
<a href="https://www.flaticon.com/free-icons/theme" title="theme icons">Theme icons created by Dewi Sari - Flaticon</a>
<a href="https://www.flaticon.com/free-icons/sun" title="sun icons">Sun icons created by Freepik - Flaticon</a>

## FAQ:

New project:
```sh
$ ng new spotify
```

Start:
```sh
$ ng serve --opne
```

Development server
```sh
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.
```

Code scaffolding
```sh
Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.
```

Build
```sh
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.
```

Running unit tests
```sh
Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
```

Running end-to-end tests
```sh
Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.
```

Further help
```sh
To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
```
