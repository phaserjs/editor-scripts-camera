// You can write more code here
/* START OF COMPILED CODE */
import { ScriptNode } from "@phaserjs/editor-scripts-core";
import Phaser from "phaser";
/* START-USER-IMPORTS */
import { DurationConfigComp } from "@phaserjs/editor-scripts-simple-animations";
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
    /* START-USER-CODE */
    execute(...args) {
        const camera = this.scene.cameras.main;
        const duration = DurationConfigComp.getDuration(this, 1000);
        camera.once(Phaser.Cameras.Scene2D.Events.SHAKE_COMPLETE, () => this.executeChildren(...args));
        camera.shake(duration, this.intensity, this.force);
    }
}
/* END OF COMPILED CODE */
// You can write more code here
