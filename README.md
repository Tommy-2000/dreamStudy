# dreamStudy - GCSE and A Level Revision Platform (Web and App) Built To Support SEND students

## Planned Features

* Accessibility tools:
  * Built-in AAC communicator.
  * Colourblind-friendly contrast filters.
  * Dyslexia-friendly text font styles.

* Content can be freely reorganised.
* Support for handwritten notes.
* Words can be linked to other pieces of revision content.
* Full offline support.


## Project Motivation

This project is currently being developed with the intention of developing my experience with React Native and ASP.NET, as well as providing a powerful tool that can best support SEND students currently studying GCSE or A Level examinations; addressing the support gaps identified in recent research studies. This project was also inspired by the work done by [Genio (formerly Glean)](https://genio.co/) and [Arbor Education](https://arbor-education.com/) to best support students in achieving their best and teachers in effectively planning a student's learning journey, shaping their overall educational pedagogy.

An app for teachers that will allow for them to publish and tailor revision content for each student will also be added to this repo at a later date. All work on this project is based on existing academical research into sensory-processing for neuro-diverse students within schools and any React Native developers, SEND teachers and experts within these field are more than welcome to collaborate and share feedback with me on key improvements and recommendations for the project.


## Pages

- Home - Students can see an overview of their progress, their subjects, teachers and can easily find the support they need for each subject.
- Study - Relevant subject content that each student is assigned to can be found here. Content can be uploaded by the teacher directly to the app. A separate client for teachers allows them to publish custom revision content and study plans to best tailor the learning experience to each student's needs.
- Notes - Students can make freeform notes regarding specific subjects and share them with other students on the platform.
- Journey - Students can track the progress made in each subject.
- Support - Students can access support directly from their teachers and support workers where necessary.
- User - Students can access accessibilty options here and customise their overall learning experience.


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

## Contribute

If you have any suggestions or further improvements you would like to make to this project, please feel free to send me a PR with the changes you recommend to dreamdev.tommy.2000@outlook.com. You are also more than welcome to make a fork of this repo if you want to make your changes there. Thanks! 😀👍


> *一緒に夢に飛び込みましょう (Let’s dive into our dreams together)*
