import Engine from "./engine";
import GameObject from "./gameobject";
import Renderable from "./renderable";
import playerIMG from "./images/player.png"

let engine = new Engine();

let testObj1 = new GameObject();
testObj1.position = [100, 100];

testObj1.addChild(new Renderable(playerIMG, 0, 9, 9, 4, 1))
engine.addObject(testObj1);