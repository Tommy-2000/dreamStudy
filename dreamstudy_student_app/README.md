# dreamStudy - GCSE and A Level Revision Platform Built with Neurodiversity

## Pages

- Home - Students can see an overview of their progress report and can easily find the support they need for specific subjects.
- Study - Relevant subject content that each student is assigned to can be found here. Content can be uploaded from an LMS and then updated to the platform. A separate client for teachers allows them to publish custom revision content and study plans to best tailor the learning experience to each student's needs.
- Notes - Students can make freeform notes regarding specific subjects and share them with other students on the platform.
- Journey - Students can track the progress made in each subject.
- Support - Students can access support directly from their teachers and support workers if necessary
- User -

## Features

## Project Motivation

This project is currently being developed with the intention of developing my experience with React Native and ASP.NET, as well as providing a powerful tool that can best support SEND students currently studying GCSE or A Level examinations; addressing the support gaps identified in recent research studies.

## Get Started

First, run this command to clear any existing cache before compiling with Expo:

```bash
expo -c
```

Then create the necessary canvaskit.wasm file in the 'public' folder that allows for Skia rendering on web. Credit to [Expo - Examples/with-skia](https://github.com/expo/examples/blob/master/with-skia)

```bash
npx setup-skia-web public && node skia_postinstall.js
```

If you are running this on an Android or iOS device, the canvaskist.wasm file is ignored and native rendering is used instead.

```bash

```



