class Pinkb {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false,
          restitution:0.3,
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      this.image = loadImage("Pink_Monster.png")
    }
    display()
    {
      push()
      var pos =this.body.position;
      imageMode(CENTER);

      fill("pink");

      image(this.image,pos.x, pos.y, this.width, this.height);
      pop()
    }
  }; 