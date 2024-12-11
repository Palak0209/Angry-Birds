import Bird from "../entities/Bird.js";
import WhiteBird from "../entities/WhiteBird.js";
import YellowBird from "../entities/YellowBird.js";
import BirdType from "../enums/BirdType.js";

export default class BirdFactory {
	/**
	 * Encapsulates the instantiation logic for creating birds.
	 * This method should be extended when adding new birds.
	 *
	 * @param {object} type Uses the BirdType enum.
	 * @returns An instance of a Bird.
	 */
	 static createInstance(type, x, y) {
		switch (type) {
			case BirdType.Red:
				return new Bird(x, y, [{ x: 903, y: 798, width: 45, height: 45 }]);

			case BirdType.Yellow:
				return new YellowBird(x, y, [{ x: 668, y: 879, width: 58, height: 54 }]);

			case BirdType.White:
				return new WhiteBird(x, y, [
					{ x: 410, y: 542, width: 80, height: 93 },
					{ x: 410, y: 353, width: 80, height: 93 },
					{ x: 410, y: 448, width: 80, height: 93 },
					{ x: 493, y: 353, width: 85, height: 93 },
					{ x: 667, y: 752, width: 50, height: 65 },
					{ x: 668, y: 820, width: 45, height: 57 },
				]);
		}
	}
}
