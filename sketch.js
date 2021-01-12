var player, playerIMG;

var BBalloon, BBIMG;
var PBalloon, PBIMG;
var GBalloon, GBIMG;
var RBallon, RBIMG;
var balloonGroup;

var balloon;

var bgIMG;

var score = 0;

var canvas;

function preload() {

    playerIMG = loadImage("Images/Pin.png");

    BBIMG = loadImage("Images/blue_balloon0.png");
    PBIMG = loadImage("Images/pink_balloon0.png");
    GBIMG = loadImage("Images/green_balloon0.png");
    RBIMG = loadImage("Images/red_balloon0.png");
    
    bgIMG = loadImage("Images/Background.jpg");

}

function setup(){
    canvas = createCanvas(608,342);

    player = createSprite(304, 342, 10, 10);
    player.addImage("player", playerIMG);
    player.scale = 0.05;

    balloonGroup = new Group();

    player.setCollider("rectangle", 0, 0, 15, 15);

}

function draw(){
    background(bgIMG);

        fill(random(0,255),random(0,255), random(0,255));
        textSize(20);
        textFont("Cinzel");
        text("Score: " + score, 5,20);
        text("Touch The Balloon To Pop It!", 170, 20);

        player.x = World.mouseX;
        player.y = World.mouseY;

        spawnBalloon();

        if (balloonGroup.isTouching(player)){

            score = score+50;
            balloonGroup.destroyEach();
            
        }
    drawSprites();

}

function spawnBalloon(){

    if (frameCount % 4 === 0){

        balloon = createSprite(304,342,10,40);

        balloon.x = Math.round(random(10, 500));
        var rand = Math.round(random(1,4));

        balloon.depth = 1;
        player.depth = player.depth+1;

        switch(rand) {
        case 1: balloon.addImage(BBIMG);
        balloon.scale = 0.1;
                break;
        case 2: balloon.addImage(GBIMG);
        balloon.scale = 0.1;
                break;
        case 3: balloon.addImage(PBIMG);
        balloon.scale = 1.4;
                break;
        case 4: balloon.addImage(RBIMG);
        balloon.scale = 0.1;
                break;
        default: break;

        }

        balloon.velocityY = -(7 + 1*score/150);

        balloon.lifetime = 50;

        balloonGroup.add(balloon);

    }

}