class Ground{

    constructor(x,y,w,h){
    var option={
        isStatic:true
    }
    this.body=Matter.Bodies.rectangle(x,y,w,h,option)
    this.width=w
    this.height=h
    World.add(world,this.body)

    }

    display(){
        var pos=this.body.position
        push()
        translate(this.body.position.x,this.body.position.y)
        rectMode(CENTER)
        rect(pos.x,pos.y,this.width,this.height)
        pop()
    }


}