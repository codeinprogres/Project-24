class PlayerArcher{
    constructor(x,y,width,height){

        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(x,y,width,height);
        this.image = loadImage("./assets/playerArcher.png");
        World.add(world, this.body);
        Matter.body.setAngle(this.body, -PI/2);
    }

    display(){

        var pos1 = this.body.position;
        var angle1 = this.body.angle;
        
        push();
        imageMode(CENTER);
        translate(pos1.x, pos1.y);
        rotate(this.angle1);
        strokeWeight(4);
        image(this.image, 0,0, this.width, this.height);
        pop();
    }
}