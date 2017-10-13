import { Pos } from './Position'
export class Arm {
    name: string;
    damage: number
    position: Pos

    setPosition(newPosition: Pos): void {
        this.position = newPosition
    }

    setName(name: string): void {
        this.name = name
    }
    
    setDamage(damage: number): void {
        this.damage = damage
    }
}