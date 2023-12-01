
// You can write more code here

/* START OF COMPILED CODE */

import { ScriptNode } from "@phasereditor2d/scripts-core";
import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class ShakeCameraActionScript extends ScriptNode {

	constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene) {
		super(parent);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	public intensity: number = 0.05;
	public force: boolean = false;
	public duration: number = 1000;

	/* START-USER-CODE */

	execute(...args: any[]): void {

		const camera = this.scene.cameras.main;

		camera.once(Phaser.Cameras.Scene2D.Events.SHAKE_COMPLETE,
			() => this.executeChildren(...args));

		camera.shake(this.duration, this.intensity, this.force);
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
