import { Personnage } from './Perso'
export class MapGame {

    static mapStructure:Array<Array<Boolean>> = [];

    static initMapStructure(): void{
        let blackCase:number = 0;
        let randomBool:boolean;
        for(let i=0;i<3;i++){
            MapGame.mapStructure[i] = [];
            for(let j=0;j<5;j++){
                if(!(i==0 && j==0) && !(i==2 && j==4) && blackCase < 3)
                {
                    randomBool = Math.random() >= 0.5;
                    MapGame.mapStructure[i].push(randomBool);
                    if(!randomBool)
                        blackCase++;
                }
                else
                    MapGame.mapStructure[i].push(true);
            }
        }
    }

    static generateMap(): void{
        MapGame.initMapStructure();
        for(let i=0;i<3;i++){
            for(let j=0;j<5;j++){
                if(MapGame.mapStructure[i][j])
                    $(`#${i}_${j}`).addClass("white");
                else
                {
                    $(`#${i}_${j}`).addClass("black");
                }
            }
        }
    }

    static refreshPositionOnMap(perso:Personnage){
        let persoName = perso.isEnnemi ? "enemy" : "bomberman";
        for(let i=0;i<3;i++){
            for(let j=0;j<5;j++){
                if($(`#${i}_${j}`).hasClass(persoName))
                    $(`#${i}_${j}`).removeClass(persoName);
            }
        }
        $(`#${perso.position.y}_${perso.position.x}`).addClass(persoName);
    }

}