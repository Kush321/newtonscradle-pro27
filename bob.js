class Bob{
    constructor(x,y,radius){
        var options={
            'density':1.0,
            'friction':5.0,
            'restitution':1.3,
           // isStatic:true
        }
        this.body=Bodies.circle(x,y,radius-30,options);
        this.radius=radius;
        World.add(world, this.body);
    }
    display(){
        var pos=this.body.position;
        ellipseMode(CENTER);
        fill("pink");
        ellipse(pos.x,pos.y,this.radius);
    }
}