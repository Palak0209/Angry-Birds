import { matter, world } from '../globals.js';
import Bird from './Bird.js';
import Egg from './Egg.js';
import Animation from '../../lib/Animation.js';

export default class WhiteBird extends Bird {

    constructor(x, y, staticMeasurements) {
        super(x, y, staticMeasurements);
        this.egg;
        this.renderOffset = { x: -30, y: -55 };
        this.radius = 35;

        this.frames = [staticMeasurements[1],
        staticMeasurements[2],
        staticMeasurements[3]];

        this.animation;
        this.isEggTriggered = false;
        this.shouldPlayAnimation = false;
        this.isEggCreated = false;
        this.hasReachedGround = false;
    }


    render() {
        super.render()
        if (this.egg) {
            this.egg.render()
        }
    }

    onKeyDown(event) {
        if (event.code === 'Space' && !this.isWaiting && !this.isOnGround() && !this.didStop() && !this.hasReachedGround) {
            this.isEggTriggered = true;
            if (!this.isWaiting)
                this.hasReachedGround = true;
        }
    }

    update(dt) {
        super.update(dt);

        if (this.isEggTriggered) {
            this.animation = new Animation([1, 2, 3, 4], 0.02, 1);
            this.shouldPlayAnimation = true;
            this.isEggTriggered = false;
        }

        if (this.shouldPlayAnimation) {
            // @ts-ignore
            this.animation.update(dt);
            this.currentFrame = this.animation?.getCurrentFrame();
            // @ts-ignore
            if (this.animation.isDone()) {
                this.shouldPlayAnimation = false;
                this.layEgg();
            }
        }
    }

    layEgg() {
        this.isEggCreated = true;
        this.egg = new Egg(this.body.position.x, this.body.position.y, [{ x: 668, y: 820, width: 45, height: 57 }]);
        matter.Composite.add(world, this.egg.body);

        matter.Body.applyForce(this.body, this.body.position, {
            x: 0.2,
            y: -1.2,
        });
    }
}