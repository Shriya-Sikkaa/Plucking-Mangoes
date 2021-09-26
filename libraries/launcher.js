class Launcher{
    constructor(bodyA,pointB){
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 0.04,
            length: 10
        }
        this.launcher= Constraid.create(options);
        World.add(world, this.launcher);
    }
        fly (){
            this.launcher.bodyA= null 
        }
        display(){
            if (this.launcher.bodyA != null)
            var pointA= this.launcher.bodyA.position;
            var pointB= this.launcher.bodyB;
            strokeweight(4);
            line(pointA.y, pointA.y, pointB.x, pointB.y);
            
        }
}