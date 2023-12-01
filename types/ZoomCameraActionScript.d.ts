import { ScriptNode } from "@phasereditor2d/scripts-core";
import Phaser from "phaser";
export default class ZoomCameraActionScript extends ScriptNode {
    constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene);
    zoom: number;
    execute(...args: any[]): void;
}
