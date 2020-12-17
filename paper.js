class paper{

    contructor(x,y){

        this.body=paper.circle(300,300,20,100,{options})
        World.add(world,paper)
        



var options{
isStatic: false
restution:0.9
friction:0.5
density:1.2
}  

}
    
function keyPressed(){
if (keycode===UP_ARROW){

Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:85});

}
}







}
display(){
    paper.display();
}