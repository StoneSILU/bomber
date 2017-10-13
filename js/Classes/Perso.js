define(["require", "exports", "./MapGame"], function (require, exports, MapGame_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Personnage = /** @class */ (function () {
        function Personnage() {
            this.arms = [];
            this.isDead = false;
            this.healthPoints = 100;
        }
        Personnage.prototype.attacks = function (ennemi) {
            ennemi.healthPoints - 10;
            return ennemi;
        };
        // 0: to Top, 1: to Right, 2: to bottom, 3: to Left
        Personnage.prototype.move = function (move) {
            var hasMove = false;
            if (!move)
                move = Math.floor(Math.random() * 4) + 0;
            switch (move) {
                case 0:
                    if (this.position.y > 0)
                        if (MapGame_1.MapGame.mapStructure[this.position.y - 1][this.position.x]) {
                            this.position.y -= 1;
                            hasMove = true;
                        }
                    break;
                case 1:
                    if (this.position.x < 4)
                        if (MapGame_1.MapGame.mapStructure[this.position.y][this.position.x + 1]) {
                            this.position.x += 1;
                            hasMove = true;
                        }
                    break;
                case 2:
                    if (this.position.y < 2)
                        if (MapGame_1.MapGame.mapStructure[this.position.y + 1][this.position.x]) {
                            this.position.y += 1;
                            hasMove = true;
                        }
                    break;
                case 3:
                    if (this.position.x > 0)
                        if (MapGame_1.MapGame.mapStructure[this.position.y][this.position.x - 1]) {
                            this.position.x -= 1;
                            hasMove = true;
                        }
                    break;
            }
            return hasMove;
        };
        Personnage.prototype.getArm = function (arm) {
            this.arms.push(arm);
        };
        return Personnage;
    }());
    exports.Personnage = Personnage;
});
