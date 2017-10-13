import { Arm } from './Arm'
import { Pos } from './Position'
import { MapGame } from './MapGame'
export class Personnage {
    position: Pos;
    isEnnemi: boolean; 
    arms: Array<Arm> = [];
    isDead: boolean = false;
    healthPoints: number = 100;

    attacks(ennemi: Personnage):Personnage {
        ennemi.healthPoints - 10;
        return ennemi;
    }
    // 0: to Top, 1: to Right, 2: to bottom, 3: to Left
    move(move?:number): boolean {
        let hasMove = false;
        if(!move) 
            move = Math.floor(Math.random() * 4) + 0;
        switch(move) {
            case 0:
                if(this.position.y > 0)
                    if(MapGame.mapStructure[this.position.y-1][this.position.x])
                    {
                        this.position.y -= 1;
                        hasMove = true;
                    }
                break;
            case 1:
                if(this.position.x < 4)
                    if(MapGame.mapStructure[this.position.y][this.position.x+1])
                    {
                        this.position.x += 1;
                        hasMove = true;
                    }
                break;
            case 2:
                if(this.position.y < 2)
                    if(MapGame.mapStructure[this.position.y+1][this.position.x])
                    {
                        this.position.y += 1;
                        hasMove = true;
                    }
                break;
            case 3:
                if(this.position.x > 0)
                    if(MapGame.mapStructure[this.position.y][this.position.x-1])
                    {
                        this.position.x -= 1;
                        hasMove = true;
                    }
                break;
        }
        return hasMove;
    }

    getArm(arm: Arm): void{
        this.arms.push(arm);
    }
}