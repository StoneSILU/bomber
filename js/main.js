define(["require", "exports", "./Classes/MapGame", "./Classes/Position", "./Classes/Perso"], function (require, exports, MapGame_1, Position_1, Perso_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    MapGame_1.MapGame.generateMap();
    //Création des personnages
    var bomberman = new Perso_1.Personnage();
    bomberman.isEnnemi = false;
    bomberman.position = new Position_1.Pos(0, 0);
    var enemy = new Perso_1.Personnage();
    enemy.isEnnemi = true;
    enemy.position = new Position_1.Pos(2, 4);
    /*Script*/
    $(document).ready(function () {
        MapGame_1.MapGame.refreshPositionOnMap(bomberman);
        MapGame_1.MapGame.refreshPositionOnMap(enemy);
        //on fait bouger l'ennemi toutes les secondes
        setInterval(function () {
            while (!enemy.move()) { }
            MapGame_1.MapGame.refreshPositionOnMap(enemy);
        }, 1000);
    });
});
