class ComputerArcher{
    constructor(x,y,width,height){

        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(x,y,width,height);
        this.image = loadImage("./assets/computerArcher.png");
        World.add(world, this.body);
    }

    display1(){

        var pos = this.body.position;
        var angle = this.body.angle;
        
        push();
        imageMode(CENTER);
        translate(pos.x, pos.y);
        rotate(this.angle);
        strokeWeight(4);
        image(this.image, 0,0, this.width, this.height);
        pop();
    }
}