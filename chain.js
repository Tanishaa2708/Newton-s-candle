class Chain{
    constructor(bodya,bodyb,z){
        var options={
            bodyA:bodya,
            bodyB:bodyb,
            length:255,
            pointB:{x:z,y:0}
        }

        this.rope= Constraint.create(options)
        World.add(world,this.rope)

        this.pointB=z
    }
    display(){
       stroke("white")
       strokeWeight(4)
       line (this.rope.bodyA.position.x,this.rope.bodyA.position.y,this.rope.bodyB.position.x+this.pointB,this.rope.bodyB.position.y )
    }
}