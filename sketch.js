let posx = 25;
let posy = 25;
let mySpeed = 3;
let enemyposy = 0
let enemyposx = 0
let enemyWidth = 50
let enemyHeight = 50
let points = 0
let clefairy;
let togepi;
function setup(){
    createCanvas(500,500);
    background(0);
    rectMode(CENTER);
    imageMode(CENTER);
    enemyposx = random(25,475);
    enemyposy = random(100,470);
    clefairy = loadImage('clefairy.png');
    togepi = loadImage('togepi.png');
}

function draw() {
    background(0);
    rect(posx,posy,50,50);
    image(clefairy,posx,posy,50,50);
    rect(enemyposx, enemyposy,enemyWidth,enemyHeight)
    //draw the togepi enemy
    image(togepi,enemyposx,enemyposy,enemyWidth,enemyHeight)
    if (keyIsDown(LEFT_ARROW)) {
        posx -= mySpeed;
    }
    if(keyIsDown(RIGHT_ARROW)) {
        posx += mySpeed;
    }
    if(keyIsDown(UP_ARROW)) {
        posy -= mySpeed;
    }
    if(keyIsDown(DOWN_ARROW)){
        posy += mySpeed;
    }
    //know my edges
    myLeft = posx - 25
    myRight = posx + 25
    myTop = posy - 25
    myBottom = posy + 25

    //defineEnemyEdges 
    enemyLeft = enemyposx - 25
    enemyRight = enemyposx + 25
    enemyTop = enemyposy - 25
    enemyBottom = enemyposy + 25

    if (myLeft > enemyRight || myRight <  enemyLeft || myTop > enemyBottom|| myBottom < enemyTop){
        //nothing
    }
    else{
        console.log("collision!");
        points ++;
        //output text to the user
        fill(random(255), random(255), random(255));
        text('im colliding with my enemy',255,480)
        enemyposx = random(20,475)
        enemeyposy = random(10,450)
    }
    fill(255)
    text('These are your points'+ points, 200, 50)
}
