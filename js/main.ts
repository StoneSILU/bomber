import { MapGame } from "./Classes/MapGame"
import { Arm } from './Classes/Arm'
import { Pos } from './Classes/Position'
import { Personnage } from './Classes/Perso'

MapGame.generateMap();
//Création des personnages
let bomberman:Personnage = new Personnage();
bomberman.isEnnemi = false;
bomberman.position = new Pos(0,0);

let enemy:Personnage = new Personnage();
enemy.isEnnemi = true;
enemy.position = new Pos(2,4);

/*Script*/
$(document).ready(function() {
    MapGame.refreshPositionOnMap(bomberman);
    MapGame.refreshPositionOnMap(enemy);
    //on fait bouger l'ennemi toutes les secondes
    setInterval(function(){
        while(!enemy.move()){}
        MapGame.refreshPositionOnMap(enemy);
    },1000);
});