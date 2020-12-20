class bob{
constructor(x,y){
var options={
    isStatic:false,
    restitution:1,
    friction:0,
    density:0.8

}

this.body=Bodies.circle(x,y,20,options)
this.radius=20;
World.add(world,this.body)

}
display(){
    var pos=this.body.position;
    ellipseMode(RADIUS)
    fill("purple")
    ellipse(pos.x,pos.y,this.radius)
}



}