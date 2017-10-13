define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MapGame = /** @class */ (function () {
        function MapGame() {
        }
        MapGame.initMapStructure = function () {
            var blackCase = 0;
            var randomBool;
            for (var i = 0; i < 3; i++) {
                MapGame.mapStructure[i] = [];
                for (var j = 0; j < 5; j++) {
                    if (!(i == 0 && j == 0) && !(i == 2 && j == 4) && blackCase < 3) {
                        randomBool = Math.random() >= 0.5;
                        MapGame.mapStructure[i].push(randomBool);
                        if (!randomBool)
                            blackCase++;
                    }
                    else
                        MapGame.mapStructure[i].push(true);
                }
            }
        };
        MapGame.generateMap = function () {
            MapGame.initMapStructure();
            for (var i = 0; i < 3; i++) {
                for (var j = 0; j < 5; j++) {
                    if (MapGame.mapStructure[i][j])
                        $("#" + i + "_" + j).addClass("white");
                    else {
                        $("#" + i + "_" + j).addClass("black");
                    }
                }
            }
        };
        MapGame.refreshPositionOnMap = function (perso) {
            var persoName = perso.isEnnemi ? "enemy" : "bomberman";
            for (var i = 0; i < 3; i++) {
                for (var j = 0; j < 5; j++) {
                    if ($("#" + i + "_" + j).hasClass(persoName))
                        $("#" + i + "_" + j).removeClass(persoName);
                }
            }
            $("#" + perso.position.y + "_" + perso.position.x).addClass(persoName);
        };
        MapGame.mapStructure = [];
        return MapGame;
    }());
    exports.MapGame = MapGame;
});
