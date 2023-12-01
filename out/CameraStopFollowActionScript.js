// You can write more code here
/* START OF COMPILED CODE */
import { ScriptNode } from "@phasereditor2d/scripts-core";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */
export default class CameraStopFollowActionScript extends ScriptNode {
    constructor(parent) {
        super(parent);
        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }
    /* START-USER-CODE */
    execute(...args) {
        const camera = this.scene.cameras.main;
        camera.stopFollow();
    }
}
/* END OF COMPILED CODE */
// You can write more code here
