import { matter } from '../globals.js';
import BodyType from '../enums/BodyType.js';
import Circle from './Circle.js';
import { oneInXChance } from '../../lib/Random.js';
import GameEntity from './GameEntity.js';
import BirdType from '../enums/BirdType.js';
import Bird from './Bird.js';

export default class YellowBird extends Bird {

    constructor(x, y, staticMeasurements) {
        super(x, y, staticMeasurements)
        this.radius = 23;
        this.hasReachedGround = false;
    }

    onKeyDown(event) {
        if (event.code === 'Space' && !this.isWaiting && !this.isOnGround() && !this.didStop() && !this.hasReachedGround) {

            if (!this.isWaiting)
                this.hasReachedGround = true;
            const currentVelocity = this.body.velocity;
            const forceMagnitude = 0.08;

            // Normalize velocity to get direction and multiply by the force magnitude
            const force = {
                x: currentVelocity.x * forceMagnitude,
                y: currentVelocity.y * forceMagnitude
            };

            matter.Body.applyForce(this.body, this.body.position, force);
        }
    }
}