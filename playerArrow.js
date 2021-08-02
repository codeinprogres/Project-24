class PlayerArrow{
    constructor(x,y,width,height, archerAngle1){
        var options1 = {
            restitution: 0.8,
            friction: 1.0,
            density: 1.0,
            isStatic: true
          };

          this.width = width;
          this.height = height;
          this.body = Bodies.rectangle(x, y, this.width, this.height, options1);
          this.image = loadImage("./assets/arrow.png");
          World.add(world, this.body);
    }
}