class Blueb {
    constructor(x,y,width,height) {
     
      this.body = Bodies.rectangle(x,y,width,height);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      this.image = loadImage("b.png");

    }
    display()
    {
      push()
      var pos =this.body.position;
      imageMode(CENTER);

      fill("cyan");

      image(this.image,pos.x, pos.y, this.width, this.height);
      pop()
    }
  }; 