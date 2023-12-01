import { ScriptNode } from "@phasereditor2d/scripts-core";
import Phaser from "phaser";
export default class ShakeCameraActionScript extends ScriptNode {
    constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene);
    intensity: number;
    force: boolean;
    duration: number;
    execute(...args: any[]): void;
}
