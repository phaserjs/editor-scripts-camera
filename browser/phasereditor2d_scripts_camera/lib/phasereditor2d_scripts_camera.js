// You can write more code here
/* START OF COMPILED CODE */
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */
class CameraStartFollowActionScript extends ScriptNode {
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

// You can write more code here
/* START OF COMPILED CODE */
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */
class CameraStopFollowActionScript extends ScriptNode {
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

// You can write more code here
/* START OF COMPILED CODE */
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */
class FadeCameraActionScript extends ScriptNode {
    constructor(parent) {
        super(parent);
        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }
    fadeDirection = "FadeIn";
    color = "#000000";
    /* START-USER-CODE */
    static getColor(colorName) {
        if (colorName.startsWith("#")) {
            colorName = colorName.substring(0, 7);
        }
        const color = Phaser.Display.Color.ValueToColor(colorName);
        return color;
    }
    execute(...args) {
        const camera = this.scene.cameras.main;
        const duration = DurationConfigComp.getDuration(this, 1000);
        const { red, green, blue } = FadeCameraActionScript.getColor(this.color);
        if (this.fadeDirection === "FadeIn") {
            camera.once(Phaser.Cameras.Scene2D.Events.FADE_IN_COMPLETE, () => this.executeChildren(...args));
            camera.fadeIn(duration, red, green, blue);
        }
        else {
            camera.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, () => this.executeChildren(...args));
            camera.fadeOut(duration, red, green, blue);
        }
    }
}
/* END OF COMPILED CODE */
// You can write more code here

// You can write more code here
/* START OF COMPILED CODE */
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */
class FlashCameraActionScript extends ScriptNode {
    constructor(parent) {
        super(parent);
        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }
    color = "#000000";
    /* START-USER-CODE */
    execute(...args) {
        const camera = this.scene.cameras.main;
        const duration = DurationConfigComp.getDuration(this, 250);
        const { red, green, blue } = FadeCameraActionScript.getColor(this.color);
        camera.once(Phaser.Cameras.Scene2D.Events.FLASH_COMPLETE, () => {
            this.executeChildren(...args);
        });
        camera.flash(duration, red, green, blue);
    }
}
/* END OF COMPILED CODE */
// You can write more code here

// You can write more code here
/* START OF COMPILED CODE */
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */
class ShakeCameraActionScript extends ScriptNode {
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

// You can write more code here
/* START OF COMPILED CODE */
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */
class ZoomCameraActionScript extends ScriptNode {
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

// 
