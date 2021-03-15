const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var stone, rubber,hammer,plane;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

   
    
    //create the new objects for plane,rubber,stone,hammer

    

}

function draw(){
    background("lightBlue");
    Engine.update(engine);

    //display the plane, hammer, stone and rubber.

 
}