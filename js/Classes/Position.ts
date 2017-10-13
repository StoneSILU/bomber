export class Pos {
    x: number
    y: number

    constructor(y:number, x:number) { 
        this.x = x;
        this.y = y; 
     } 

    getPosition(): { x: number, y: number }{
        return { x: this.x, y: this.y }
    }
}