<link href="https://fonts.googleapis.com/css2?family=Titillium+Web&display=swap" rel="stylesheet">
<div style="display: flex; flex-flow: row; font-family: 'Titillium Web'">
    <!-- <div style="font-size: 2.5rem; align-self: start; justify-content: start; margin: 0px; margin-left: 0.5rem; margin-right: 0.5rem; ">Examples</div> -->
    <img height="70px" style="border-radius: 0.25rem" alt="ignite-ui" src="./browser/src/assets/images/rsrcs/logo-ignite-ui.svg"/>
    <!-- <div style="font-size: 2.5rem; margin: 0px; margin-left: 0.5rem; margin-right: 0.5rem; color: white; "> for Angular </div> -->
</div>

# Examples of Ignite UI for Angular Components

This repository contains over 240 examples on how to use [Ignite UI for Angular](https://www.infragistics.com/products/ignite-ui-Angular/Angular/components/general-getting-started.html) components:

- Charts:
[Area](https://www.infragistics.com/Angularsite/components/charts/types/area-chart),
[Bar](https://www.infragistics.com/Angularsite/components/charts/types/bar-chart),
[Column](https://www.infragistics.com/Angularsite/components/charts/types/column-chart),
[Composite](https://www.infragistics.com/Angularsite/components/charts/types/composite-chart),
[Donut](https://www.infragistics.com/Angularsite/components/charts/types/donut-chart),
[Financial/Stock](https://www.infragistics.com/Angularsite/components/charts/types/stock-chart),
[Line](https://www.infragistics.com/Angularsite/components/charts/types/line-chart),
[Pie](https://www.infragistics.com/Angularsite/components/charts/types/pie-chart),
[Polar](https://www.infragistics.com/Angularsite/components/charts/types/polar-chart),
[Radial](https://www.infragistics.com/Angularsite/components/charts/types/radial-chart),
[Scatter](https://www.infragistics.com/Angularsite/components/charts/types/scatter-chart),
[Shape](https://www.infragistics.com/Angularsite/components/charts/types/shape-chart),
[Sparkline](https://www.infragistics.com/Angularsite/components/charts/types/sparkline-chart),
[Stacked](https://www.infragistics.com/Angularsite/components/charts/types/stacked-chart),
[Step](https://www.infragistics.com/Angularsite/components/charts/types/step-chart),
- Maps:
[Geographic Map](https://www.infragistics.com/Angularsite/components/geo-map.html),
[Treemap](https://www.infragistics.com/Angularsite/components/treemap-overview.html),
- Gauges:
[Bullet Graph](https://www.infragistics.com/Angularsite/components/bullet-graph),
[Linear Gauge](https://www.infragistics.com/Angularsite/components/linear-gauge.html),
[Radial Gauges](https://www.infragistics.com/Angularsite/components/radial-gauge.html)

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

- in VS Code, open a folder with existing sample, e.g.
```
./samples/charts/category-chart/axis-options/
```
- type `npm install` command in terminal window
- type `npm run start` command in terminal window

- Wait until the build is completed and then open [http://localhost:4200](http://localhost:4200) in your browser.

At this point, you should see a website hosted example of [Ignite UI for Angular](https://www.infragistics.com/products/ignite-ui-angular/angular/components/general-getting-started) component


## Running All Samples

- open VS Code as Administrator
- open the folder that contains this repository, e.g. `C:\GitHub\igniteui-angular-examples\`
- select **View** - **Terminal** menu item

- type `npm install` command in terminal window

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

- type `npm install` command in terminal window

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
