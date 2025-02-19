
<div style="display: flex; flex-flow: row; font-family: 'Titillium Web'">
    <img style="border-radius: 0.25rem" alt="ignite-ui" src="https://raw.githubusercontent.com/IgniteUI/igniteui-xplat-docs/vnext/doc/en/images/readme/ig-banner.png"/>
</div>


# Examples of Ignite UI for Angular Components

This repository contains an Angular browser app and 500+ examples on how to use [Ignite UI for Angular](https://www.infragistics.com/products/ignite-ui-Angular/Angular/components/general-getting-started.html) components:

- Charts:
[Area](https://www.infragistics.com/products/ignite-ui-angular/angular/components/charts/types/area-chart),
[Bar](https://www.infragistics.com/products/ignite-ui-angular/angular/components/charts/types/bar-chart),
[Column](https://www.infragistics.com/products/ignite-ui-angular/angular/components/charts/types/column-chart),
[Composite](https://www.infragistics.com/products/ignite-ui-angular/angular/components/charts/types/composite-chart),
[Donut](https://www.infragistics.com/products/ignite-ui-angular/angular/components/charts/types/donut-chart),
[Financial/Stock](https://www.infragistics.com/products/ignite-ui-angular/angular/components/charts/types/stock-chart),
[Line](https://www.infragistics.com/products/ignite-ui-angular/angular/components/charts/types/line-chart),
[Pie](https://www.infragistics.com/products/ignite-ui-angular/angular/components/charts/types/pie-chart),
[Polar](https://www.infragistics.com/products/ignite-ui-angular/angular/components/charts/types/polar-chart),
[Radial](https://www.infragistics.com/products/ignite-ui-angular/angular/components/charts/types/radial-chart),
[Scatter](https://www.infragistics.com/products/ignite-ui-angular/angular/components/charts/types/scatter-chart),
[Shape](https://www.infragistics.com/products/ignite-ui-angular/angular/components/charts/types/shape-chart),
[Sparkline](https://www.infragistics.com/products/ignite-ui-angular/angular/components/charts/types/sparkline-chart),
[Stacked](https://www.infragistics.com/products/ignite-ui-angular/angular/components/charts/types/stacked-chart),
[Step](https://www.infragistics.com/products/ignite-ui-angular/angular/components/charts/types/step-chart),
- Maps:
[Geographic Map](https://www.infragistics.com/products/ignite-ui-angular/angular/components/geo-map.html),
[Treemap](https://www.infragistics.com/products/ignite-ui-angular/angular/components/treemap-overview.html),
- Gauges:
[Bullet Graph](https://www.infragistics.com/products/ignite-ui-angular/angular/components/bullet-graph),
[Linear Gauge](https://www.infragistics.com/products/ignite-ui-angular/angular/components/linear-gauge.html),
[Radial Gauges](https://www.infragistics.com/products/ignite-ui-angular/angular/components/radial-gauge.html)

You can run each sample project individually from the ./samples folder or you can browse all samples in one website from the ./browser folder.

## Branches

> **_NOTE:_** You should use [master](https://github.com/IgniteUI/igniteui-angular-examples/tree/master) branch of this repository if you want to run samples on your computer. Use the [vnext](https://github.com/IgniteUI/igniteui-angular-examples/tree/vnext) branch only when you want to contribute new samples to this repository.

## Preview

You can preview and browse all samples in this repository by opening our [Angular Samples Browser](https://www.infragistics.com/angular-demos-dv/samples/). Alternatively, you you can view these samples with detailed information in our [Angular Help Documentation](https://www.infragistics.com/products/ignite-ui-angular/angular/components/general-getting-started).

In addition, you can run each sample project individually from the [./samples](./samples) folder or you can run from the [./browser](./browser) folder to browse all samples in one website (see instructions below).

<!--
You can run each sample on Code Sandbox website by clicking on the **Edit Sandbox** button in a readme file of sample project, e.g.
[./samples/charts/category-chart/overview/README.md](./samples/charts/category-chart/overview/README.md) -->

## Setup

To set up this project locally, clone this repository:
```
git clone https://github.com/IgniteUI/igniteui-angular-examples.git
```


## Running Individual Sample

- check out the **master** branch

- in VS Code, open a folder with existing sample, e.g.
```
./samples/charts/category-chart/axis-options/
```
- type `npm install --legacy-peer-deps` command in terminal window

- type `npm run start` command in terminal window

- Wait until the build is completed and then open [http://localhost:4200](http://localhost:4200) in your browser.

At this point, you should see a website hosted example of [Ignite UI for Angular](https://www.infragistics.com/products/ignite-ui-angular/angular/components/general-getting-started) component


## Running All Samples

- check out the **master** branch

- open VS Code as Administrator

- open the folder that contains this repository, e.g.
```CMD
C:\GitHub\igniteui-angular-examples\
```

- select **View** - **Terminal** menu item

- type `npm install --legacy-peer-deps` command in terminal window

This will install required packages and [Ignite UI for Angular](https://www.infragistics.com/products/ignite-ui-angular/angular/components/general-getting-started) packages

- type `npm run start` command in terminal window to start this application locally

Note this application copies all individually sample projects from [./samples](./samples) to [./browser/src](./browser/src) folder when it is about to start running. Therefore, any changes to [./browser/src](./browser/src) will be overridden on consecutive run of the application.

Wait until the build is completed and then open [http://localhost:4200](http://localhost:4200) in your browser. You should see a website with navigation menu for browning all samples in this repository.

<!-- ![SB Preview](./browser/public/images/preview.PNG) -->

<!--
## Adding New Sample

- create a new branch from the `vnext` branch

- open a folder with existing sample, e.g.
```
./samples/charts/category-chart/axis-options/
```
- copy the sample and rename the new folder, e.g.
```
./samples/charts/category-chart/axis-types/
```
- open the newly created folder in VS Code

- rename the .tsx file in src folder, using this naming convention:

`ControlNameSampleName.tsx`

```
./samples/charts/category-chart/axis-types/src/CategoryChartAxisTypes.tsx
```

- open the .tsx file

- rename class to the name of .tsx file

- type `npm install --legacy-peer-deps` command in terminal window

- type `npm run start` command in terminal window

- implement the new sample in the .tsx file

- close the new sample project in VS Code

- delete `node_modules` folder in the new sample project

- follow instructions in the next section

## Verify New Sample

- open the root folder of this repository in VS Code

- type `gulp updateSamples` command in terminal window

NOTE this will re-generate the Readme.md file in the new sample

- type `npm run start` command in terminal window

- open [http://localhost:4200](http://localhost:4200) in your browser

- verify that the new sample is listed in the navigation menu

- verify that the new sample loads by clicking navigation link

- verify that there are no errors in DEV console

- take a screenshot of the new sample with navigation menu

- commit your changes

- create a pull request and target the `vnext` branch

- paste the screenshot in you pull request

- submit your pull request -->



## Learn More

To learn more about **Ignite UI for Angular** components, check out the [Angular documentation](https://www.infragistics.com/products/ignite-ui-Angular/Angular/components/general-getting-started.html).


## Updating Packages in Samples

NOTE Do NOT find replace version of packages in package.json files. 

- open this repo in VS Code
- open [browser.js](./browser/tasks/browser.js) file
- navigate to the `updateIG` function
- update version of packages in `packageUpgrades` array
- open terminal window
- run `cd browser` command
- run the `gulp updateIG` command
- run `npm install --legacy-peer-deps` command
- create AND merge a pull request with changes in all package.json files in this repository
- create 2nd pull request with similar changes in `/editor-templates/angular/main-template/package.json` of the [igniteui-xplat-examples](https://github.com/IgniteUI/igniteui-xplat-examples) repository.