# Phaser Editor Camera Scripts (library)

This project contains a few Phaser Editor scripts for handling the camera.

These script nodes are very basic and may fit on any Phaser Editor project.

The scripts are coded in TypeScript with ES modules.

## Installing (NPM)

This package depends on the following packages:

- `@phaserjs/editor-scripts-core`
- `@phaserjs/editor-scripts-simple-animations`

To install this in your game you have to install dependencies too:

```
npm install @phaserjs/editor-scripts-core
npm install @phaserjs/editor-scripts-simple-animations
npm install @phaserjs/editor-scripts-camera
```

Also, you should add this package to the `phasereditor2d.config.json` file in your project, in the `scripts` section:

```json
{
    "scripts": [
        "@phaserjs/editor-scripts-core",
        "@phaserjs/editor-scripts-simple-animations",
        "@phaserjs/editor-scripts-camera",
    ]
}
```
## Installing (vanilla JavaScript)

* Get the files in the [browser](./browser/) folder and copy them into your JavaScript project. It includes Phaser Editor files, JavaScript files, and TypeScript type definitions.
* Add a `script` tag to the `index.html` file to load the `lib/phaserjs_editor_scripts_camera.js` file.

## Summary

This library provides a couple of actions for handle the camera. As a reminder, an action is executed by an event script or another action.

The actions:

* **Zoom Camera Action** - Executes the zoom camera effect.
* **Shake Camera Action** - Executes the shake camera effect.
* **Flash Camera Action** - Executes the flash camera effect.
* **Fade Camera Action** - Executes the fade camera effect.
* **Camera Start Follow Action** - The camera starts following the game object.
* **Camera Stop Follow Action** - Stops the camera follow.

## Zoom Camera Action

*Class: `ZoomCameraAction`*

This action runs the [Zoom effect](https://newdocs.phaser.io/docs/3.70.0/focus/Phaser.Cameras.Scene2D.Camera-zoomTo) of the camera.

You can change how much the camera zooms with the **Zoom** property.

You can configure the duration and ease of the effect by adding the [Duration Config](https://github.com/PhaserEditor2D/phasereditor2d-scripts-simple-animations#duration-config) and [Ease Config](https://github.com/PhaserEditor2D/phasereditor2d-scripts-simple-animations#ease-config) components of the `@phaserjs/editor-scripts-simple-animations` library.

## Shake Camera Action

*Class: `ShakeCameraAction`*

This action runs the [Shake effect](https://newdocs.phaser.io/docs/3.70.0/focus/Phaser.Cameras.Scene2D.Camera-shake) of the camera.

You can tweak the effect by setting the **Intensity**, **Force**.

You can configure the duration of the effect by adding the [Duration Config](https://github.com/PhaserEditor2D/phasereditor2d-scripts-simple-animations#duration-config) component of the `@phaserjs/editor-scripts-simple-animations` library.

## Flash Camera Action

*Class: `FlashCameraActionScript`*

This action runs the [Flash effect](https://newdocs.phaser.io/docs/3.70.0/focus/Phaser.Cameras.Scene2D.Camera-flash) of the camera.

You can tweak the effect by setting the **Color** property. 

You can configure the duration of the effect by adding the [Duration Config](https://github.com/PhaserEditor2D/phasereditor2d-scripts-simple-animations#duration-config) component of the `@phaserjs/editor-scripts-simple-animations` library.

## Fade Camera Action

*Class: `FadeCameraActionScript`*

This action runs the [Fade effect](https://newdocs.phaser.io/docs/3.70.0/focus/Phaser.Cameras.Scene2D.Camera-fade) of the camera.

You can tweak the effect by setting the **Color** and **Fade Direction** properties. 

You can configure the duration of the effect by adding the [Duration Config](https://github.com/PhaserEditor2D/phasereditor2d-scripts-simple-animations#duration-config) component of the `@phaserjs/editor-scripts-simple-animations` library.

## Camera Start Follow Action

*Class: `CameraStartFollowActionScript`*

With this action the camera [starts following](https://newdocs.phaser.io/docs/3.70.0/focus/Phaser.Cameras.Scene2D.Camera-startFollow) the script's game object.

You can configure the moving effect with the **Round Pixels**, **Lerp X**, **Lerp Y**, **Offset X**, **Offset Y** parameters.

## Camera Stop Follow Action

*Class: `CameraStopFollowActionScript`*

This action stops the camera following of the script's game object.