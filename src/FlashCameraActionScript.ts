
// You can write more code here

/* START OF COMPILED CODE */

import { ScriptNode } from "@phasereditor2d/scripts-core";
import Phaser from "phaser";
/* START-USER-IMPORTS */
import { DurationConfigComp } from "@phasereditor2d/scripts-simple-animations";
import FadeCameraActionScript from "./FadeCameraActionScript";
/* END-USER-IMPORTS */

export default class FlashCameraActionScript extends ScriptNode {

	constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene) {
		super(parent);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	public color: string = "#000000";

	/* START-USER-CODE */

	execute(...args: any[]): void {

		const camera = this.scene.cameras.main;

		const duration = DurationConfigComp.getDuration(this, 250);

		const { red, green, blue } = FadeCameraActionScript.getColor(this.color);

		camera.once(Phaser.Cameras.Scene2D.Events.FLASH_COMPLETE, () => {

			this.executeChildren(...args);
		});

		camera.flash(duration, red, green, blue);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
