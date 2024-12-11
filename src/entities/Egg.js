import BodyType from '../enums/BodyType.js';
import Bird from './Bird.js';
import Circle from './Circle.js';
import GameEntity from './GameEntity.js';

export default class Egg extends Circle {
    constructor(x, y, measurements) {

        super(x, y, Bird.RADIUS, {
			label: BodyType.Egg,
			density: 0.008,
			restitution: 0.5,
			collisionFilter: {
				group: -1,
			},
		});

        this.sprites = GameEntity.generateSprites(measurements);
        this.currentFrame = 0;
        this.renderOffset= {x: -25, y: -28};
    }
}