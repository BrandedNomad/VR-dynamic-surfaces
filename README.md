# Dynamic Surfaces in VR

An exploration of creating and changing surfaces dynamically in Virtual Reality.

## Motivation

I wanted to explore creating, changing and destroying surfaces dynamically within Virtual Reality

## Tech/Framework Used

Build with:
* React-360

## Features

Features two panels with a variety of buttons that dynamically alters the surfaces.

## Installation

1.Fork and clone 

`git clone https://github.com/BrandedNomad/VR-dynamic-surfaces.git`

2.Install dependencies

`npm install`

3.(For Widows Users) Manually update the regular expression in node_modules/metro/src/blacklist.js, otherwise you will get an error when you try to start the development server.

from:

`
var sharedBlacklist = [
/node_modules[/\\]react[/\\]dist[/\\].*/,
/website\/node_modules\/.*/,
/heapCapture\/bundle\.js/,
/.*\/__tests__\/.*/];
`

To: 

`
var sharedBlacklist = [
  /node_modules[\/\\]react[\/\\]dist[\/\\].*/,
  /website\/node_modules\/.*/,
  /heapCapture\/bundle\.js/,
  /.*\/__tests__\/.*/
];
`


3.Start development server

`npm start`

4.Navigate to browser, using the link provided in the console


## How To Use It

Simply click on the different buttons and see how they affect the surfaces. (No need for VR headset)

## Credits

This is part of a Udemy tutorial on React-360 called: [Creating VR Experiences with React 360](https://www.udemy.com/course/creating-vr-experiences-with-react-360/). 

## License

MIT License

Copyright (c) 2021 Charl Swart

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
