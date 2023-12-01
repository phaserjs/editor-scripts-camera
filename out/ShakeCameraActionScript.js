// You can write more code here
/* START OF COMPILED CODE */
import { ScriptNode } from "@phasereditor2d/scripts-core";
import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */
export default class ShakeCameraActionScript extends ScriptNode {
    constructor(parent) {
        super(parent);
        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }
    intensity = 0.05;
    force = false;
    duration = 1000;
    /* START-USER-CODE */
    execute(...args) {
        const camera = this.scene.cameras.main;
        camera.once(Phaser.Cameras.Scene2D.Events.SHAKE_COMPLETE, () => this.executeChildren(...args));
        camera.shake(this.duration, this.intensity, this.force);
    }
}
/* END OF COMPILED CODE */
// You can write more code here
