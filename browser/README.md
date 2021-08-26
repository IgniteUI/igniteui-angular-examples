[![Build Status](https://dev.azure.com/IgniteUI/igniteui-angular/_apis/build/status/IgniteUI.igniteui-angular-samples?branchName=master)](https://dev.azure.com/IgniteUI/igniteui-angular/_build/latest?definitionId=4&branchName=master)
[![Build Status](https://travis-ci.org/IgniteUI/igniteui-angular-samples.svg?branch=master)](https://travis-ci.org/IgniteUI/igniteui-angular-samples)

# Browser Application

This project provides examples on how to use the Ignite UI for Angular components, that demonstrates different scenarios related to the usage of each component. The project is tightly related to [Ignite UI DocFX Site Builder](https://github.com/IgniteUI/igniteui-docfx). All samples are part of the official component topics from our [website](https://www.infragistics.com/products/ignite-ui-angular/angular/components/grid.html).

## Setup
To setup the project run:

```
npm install
```

## Build
To build the project run:

```
npm run build
```

This will produce an AOT build and [live editing](https://github.com/IgniteUI/igniteui-angular-samples/blob/master/live-editing/README.md) samples supporting both Sass and CSS.

## Dev Server
To start the dev server (including IE support) run:

```
npm run start
```

To start in modern browsers only, run:

```
npm run start:es6
```


## Running with the DocFX project

In order to combine the execution of both [DocFX](https://github.com/IgniteUI/igniteui-docfx) and Ignite UI Angular Samples projects, use `npm run start`.
After starting both projects you will see the embed samples into the DocFX site builder, under `localhost:port` hostname.
