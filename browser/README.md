
<div style="display: flex; flex-flow: row; font-family: 'Titillium Web'">
    <img style="border-radius: 0.25rem" alt="ignite-ui" src="https://raw.githubusercontent.com/IgniteUI/igniteui-xplat-docs/vnext/doc/en/images/readme/ig-banner.png"/>
</div>


[![Build Status](https://dev.azure.com/IgniteUI/igniteui-angular/_apis/build/status/IgniteUI.igniteui-angular-samples?branchName=master)](https://dev.azure.com/IgniteUI/igniteui-angular/_build/latest?definitionId=4&branchName=master)
[![Build Status](https://travis-ci.org/IgniteUI/igniteui-angular-samples.svg?branch=master)](https://travis-ci.org/IgniteUI/igniteui-angular-samples)

# Browser App for Angular Components

The **browser** folder contains an Angular app for browsing 500+ examples of [Ignite UI for Angular](https://www.infragistics.com/products/ignite-ui-Angular/Angular/components/general-getting-started.html) components.


## Branches

> **_NOTE:_** You should use [master](https://github.com/IgniteUI/igniteui-angular-examples/tree/master) branch of this repository if you want to run samples on your computer. Use the [vnext](https://github.com/IgniteUI/igniteui-angular-examples/tree/vnext) branch only when you want to contribute new samples to this repository.


## Instructions

Follow these instructions to run and browse all samples:
 
- open VS Code as Administrator

- open the folder that contains this repository, e.g. `C:\GitHub\igniteui-angular-examples\`

- select **View** - **Terminal** menu item

- type `npm install --legacy-peer-deps` command in terminal window

This will install required packages and [Ignite UI for Angular](https://www.infragistics.com/products/ignite-ui-angular/angular/components/general-getting-started) packages

- type `npm run start` command in terminal window to start this application locally

Note this application copies all individually sample projects from [./samples](./samples) to [./browser/src](./browser/src) folder when it is about to start running. Therefore, any changes to [./browser/src](./browser/src) will be overridden on consecutive run of the application.

Wait until the build is completed and then open [http://localhost:4200](http://localhost:4200) in your browser. You should see a website with navigation menu for browning all samples in this repository.

