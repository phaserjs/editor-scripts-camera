// You can write more code here
/* START OF COMPILED CODE */
import { ScriptNode } from "@phaserjs/editor-scripts-core";
/* START-USER-IMPORTS */
import { DurationConfigComp } from "@phaserjs/editor-scripts-simple-animations";
import { EaseConfigComp } from "@phaserjs/editor-scripts-simple-animations";
/* END-USER-IMPORTS */
export default class ZoomCameraActionScript extends ScriptNode {
    constructor(parent) {
        super(parent);
        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }
    zoom = 0.8;
    /* START-USER-CODE */
    execute(...args) {
        const camera = this.scene.cameras.main;
        const duration = DurationConfigComp.getDuration(this, 1000);
        const ease = EaseConfigComp.getEase(this, "Linear");
        camera.zoomTo(this.zoom, duration, ease);
    }
}
/* END OF COMPILED CODE */
// You can write more code here
