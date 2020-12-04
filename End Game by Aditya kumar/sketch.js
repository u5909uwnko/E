const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Render = Matter.Render;

var alien1 , alien2 , alien3 , alien4 , alien5 , alien6 ;

var wall1 , wall2 , wall3 , wall4;

var  dis1 , dis2 , dis3 , dis4;

var Thor , IronMan , Hulk , SpiderMan , CaptainAmerica;

var MindStone , PowerStone , SoulStone , SpaceStone , TimeStone , RealityStone;

var Background , FormBackground;

var BounsyAliens1 , BounsyAliens2;

var Instructions;

var Restart;

var Thanos , ThanosLoss;

var AliensGang;

var IronManwon;

var aliensImg;


function preload() {
 //aliensImg = loadImage("../images/Aliens.PNG");
 //AliensGang = loadImage("../images/Aliens Gang.PNG");
 //background = loadImage("../images/Background.PNG");
 //BounsyAliens1 = loadImage("../images/Bounsy Aliens 1.PNG");
 //BounsyAliens2 = loadImage("../images/Bounsy Aliens 2.PNG");
 //CaptainAmerica = loadImage("../images/Captain America.PNG");
 //FormBackground = loadImage("images/Form Background.PNG");
 //Hulk = loadImage("../images/Hulk.PNG");
 //Instructions = loadImage("../images/Instructions.PNG");
// IronManwon = loadImage("../images/Iron Man won.PNG");
 //IronMan = loadImage("../images/Iron Man.PNG");
 //MindStone = loadImage("../images/Mind Stone.PNG"); 
 //PowerStone = loadImage("../images/Power Stone.PNG");
 //RealityStone = loadImage("../images/Reality Stone.PNG");
 //Restart = loadImage("../images/Restart.PNG");
 //SoulStone = loadImage("../images/Soul Stone.PNG");
 //SpaceStone = loadImage("../images/Space Stone.PNG");
// SpiderMan= loadImage("../images/Spider Man.PNG");
 //ThanosLoss = loadImage("../images/Thanos Loss.PNG");
 //Thanos = loadImage("../images/Thanos.PNG");
 //Thor = loadImage("../images/Thor.PNG");
 //timeStoneImg = loadImage("../images/TimeStone.PNG");
}

function setup(){
    var canvas = createCanvas(2000,1500);
    engine = Engine.create();
    world = engine.world;

   alien1 = new Aliens( 40 ,  1200 , 70 , 70 );
   alien2 = new Aliens( 40 , 1000 , 70 , 70 );
   alien3 = new Aliens( 40 , 800  , 70 , 70 );
   alien4 = new Aliens( 400 , 800  , 70 , 70 );
   alien5 = new Aliens( 400 , 1000 , 70 , 70 );
   alien6 = new Aliens( 400 , 1200 , 70 , 70 );
   

   wall1 = new Wall( 1000 , 550 , 1099 ,10 );
   wall2 = new Wall( 455 ,1100 , 10, 1110 );
   wall3 = new Wall( 1544 , 963 , 10 , 835 );
  

   dis1 = new Disappearing( 1544 , 1440 , 10 , 120 );
   dis2 = new Disappearing( 850 , 271 , 10 , 550 );
   dis3 = new Disappearing( 225 , 550 , 450 , 10 );
   dis4 = new Disappearing( 1774 , 550 , 450 , 10 );

   Thor = new Heroes( 200 , 1400 , 80 ,80 );
   SpiderMan = new Heroes( 50 , 50 , 80 , 80 );
   Hulk = new Heroes( 900 , 50 , 80 , 80 );
   CaptainAmerica = new Heroes( 1620 , 620 , 80 , 80);
   IronMan = new Heroes( 530 , 620 , 80 , 80 );

   MindStone = new Stone( 800 , 50 , 50 , 50 );
   SoulStone = new Stone( 400 , 600 , 50 , 50 );
   TimeStone = new Stone( 1950 , 500 , 50 , 50 );
   PowerStone = new Stone( 1600 , 1450 , 50 , 50 );
   RealityStone= new Stone( 990 , 1050 , 50 , 50 );
   SpaceStone = new Stone();

   Thanos = new Villains( 1430 , 1035 , 160 , 500 );
   BounsyAliens1 = new Villains( 1800 , 250 , 100 , 100 );
   BounsyAliens2 = new Villains( 1800 , 1400 , 100 , 100 );

  var render = Render.create({ element: document.body,
     engine: engine,
     options: { width: 2000, height: 1300, wireframes: false } });
   Engine.run(engine);
    Render.run(render);
   
  //text(mouseX+" , "+mouseY,mouseX,mouseY);
  
   
}

function draw(){
    background(0);
    Engine.update(engine);

   alien1.display();
   alien2.display();
   alien3.display();
   alien4.display();
   alien5.display();
   alien6.display();

   wall1.display();
   wall2.display();
   wall3.display();
   
 
   dis1.display();
   dis2.display();
   dis3.display();
   dis4.display();

   Thor.display();
   IronMan.display();
   CaptainAmerica.display();
   Hulk.display();
   SpiderMan.display();

   TimeStone.display();
   SoulStone.display();
   SpaceStone.display();
   PowerStone.display();
   MindStone.display();
   RealityStone.display();

   Thanos.display();
   BounsyAliens1.display();
   BounsyAliens2.display();
   

}
