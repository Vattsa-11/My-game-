var Sol1Img,Sol2Img,Sol3Img;
var Sol1,Sol2,Sol3;
var PlayerImg1,PlayerImg2;
var KingImg;
var BGImg;
var BG;
var Ground;
var GrImg;
var BltImg;
var Bullet;

var Player;
var gameState;
var Score;

function preload(){
    Sol1Img = loadImage("My Game/Ninja1.png");
    Sol2Img = loadImage("My Game/Soldier2.png");
    Sol3Img = loadImage("My Game/Soldier3.png");
    PlayerImg1 = loadImage("My Game/dan1.png");
    PlayerImg2 = loadImage("My Game/dan2.png");
    KingImg = loadImage("My Game/King.png");
    BGImg = loadImage("My Game/BackGround.jpg");
    GrImg = loadImage("My Game/Ground.png");
    BltImg = loadImage("My Game/Bullet.png");
}

function setup(){
    createCanvas(900,500);

    BG = createSprite(width/2,height/2,width,2);
    BG.addImage(BGImg);
    BG.scale = 0.9;
    fill("red");

    Ground = createSprite(width/2+50,height ,width,40);
    Ground.addImage(GrImg);

    Player = createSprite(50,height-100,10,10);
    Player.addImage(PlayerImg1);

    Ground.velocityX = -2.5;
    Ground.scale = 1;

    Bullet = createSprite(50,height-90,5,5);
    Bullet.addImage(BltImg);
    Bullet.visible = false;
    Bullet.scale = 0.1;

}

function draw(){
    background(BGImg);
    if(Ground.x < 350 ){
        Ground.x = (Ground.width/2) -100;
    }
    if(keyDown(UP_ARROW)){
        Player.y -=6; 
    }
    if(keyDown(RIGHT_ARROW)){
        Player.x +=2;
    }
    if(keyDown(LEFT_ARROW)){
        Player.x -=2;
    }
    if(keyDown(DOWN_ARROW)){
        Player.velocityY =2;
    }
    if(keyDown("SPACE")){
        Bullet.velocityX = 3;
        Bullet.visible = true;
    }

    Player.collide(Ground);
    soldierGroup();
    drawSprites();
    console.log(frameCount);
}

function soldierGroup(){
     if (frameCount%300===0){
        Sol1 = createSprite( random(880,920),410,10,10);
        var rand = Math.round(random(1,3));
        switch (rand){
            case 1 : Sol1.addImage(Sol1Img);
            break 
            case 2 : Sol1.addImage(Sol2Img);
            break
            case 3 : Sol1.addImage(Sol3Img);
            break
            default : 
            break 
        }
        Sol1.velocityX = -2;
        Sol1.scale = 0.9;
        Sol1.collide(Ground);
     }



}