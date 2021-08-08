class Cannon{
    constructor(x, y, w, h, angle){
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
    }

    show(){
        fill("#676e6a");

        push();
        translate(this.x, this.y);
        rotate(this.angle);
        rect(-10, -20, this.width, this,height);
        pop();
        arc(this.x - 40, this.y + 90, 140, 200, PI, TWO_PI);
        noFill();
    }
}