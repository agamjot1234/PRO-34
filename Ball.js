class Ball
{
    constructor(x,y,width,heigth,angle)
    {
        var options={
            density:1,
            frictionAir:0.005
        }
        this.body = Bodies.rectangle(x,y,width,heigth,options);
        this.width =width;
        this.heigth =heigth;
        World.add(world,this.body);

    }
    display()
       {
           var angle = this.body.angle;
           push();
           translate(this.body.position.x,this.body.position.y);
           rotate(angle);
           ellipse(0,0,this.width,this.heigth);
           pop();

       }
   
}