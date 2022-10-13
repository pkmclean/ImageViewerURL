## ImageViewerURL
A widget to render an image using a URL for a native profile.

## Features
URL: A required field where the url to the image is inputted
Authentication: Optional field where an authentication token can be provided
Zoom: A required field that enables / disables zoom functionality.

## Usage
Place the widget in the widget directory within a mendix project, synchronize the project and run the mendix.

## Demo project
Load the mendix Assets folder to how to use the widget

## Development and contribution

1. Install NPM package dependencies by using: `npm install`. If you use NPM v7.x.x, which can be checked by executing `npm -v`, execute: `npm install --legacy-peer-deps`.
1. Run `npm start` to watch for code changes. On every change:
    - the widget will be bundled;
    - the bundle will be included in a `dist` folder in the root directory of the project;
    - the bundle will be included in the `deployment` and `widgets` folder of the Mendix test project.


