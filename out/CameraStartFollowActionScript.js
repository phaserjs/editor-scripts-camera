// You can write more code here
/* START OF COMPILED CODE */
import { ScriptNode } from "@phasereditor2d/scripts-core";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */
export default class CameraStartFollowActionScript extends ScriptNode {
    constructor(parent) {
        super(parent);
        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }
    roundPixels = false;
    lerpX = 1;
    lerpY = 1;
    offsetX = 0;
    offsetY = 0;
    /* START-USER-CODE */
    execute(...args) {
        if (!this.gameObject) {
            return;
        }
        const camera = this.scene.cameras.main;
        camera.startFollow(this.gameObject, this.roundPixels, this.lerpX, this.lerpY, this.offsetX, this.offsetY);
    }
}
/* END OF COMPILED CODE */
// You can write more code here
