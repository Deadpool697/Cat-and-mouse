var cat1,cat2,cat3;
var cat4, bg, bgImg , mouse1,mouse2,mouse3,mous4;
var cat,mouse;


function preload() {
    //load the images here
    bgImg = loadImage("garden.png");
    cat1 = loadImage("cat1.png");
    cat2 = loadAnimation("cat2.png","cat3.png");
    cat4 = loadImage("cat4.png");
    mouse1 = loadImage("mouse1.png");
    mouse2 = loadAnimation("mouse2.png","mouse3.png");
    mouse4 = loadImage("mouse4.png");
}

function setup(){
    createCanvas(1200,800);
    //create tom and jerry sprites here
    cat = createSprite(870,600);
    cat.addAnimation("CatMoving",cat1)
    cat.scale = .2;
    mouse = createSprite(200,600);
    mouse.addAnimation("MouseMoving",mouse1)
    mouse.scale = .2;
}

function draw() {

    background(bgImg);
    
    //Write condition here to evalute if tom and jerry collide
    if(cat.x-mouse.x < (cat.width-mouse.width)/2){
        cat.velocityX = 0
        cat.addAnimation("cat4",cat4)
        cat.x = 400;
        cat.scale = .2
        cat.changeAnimation("cat4");
        mouse.addAnimation("mouse4",mouse4)
        mouse.scale = .2
        mouse.changeAnimation("mouse4")
    }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
    if(keyCode === LEFT_ARROW){
        cat.velocityX = -5;
        cat.addAnimation("catRunning",cat2);
        cat.changeAnimation("catRunning");
        mouse.addAnimation("teasing",mouse2);
        mouse.frameDelay = 25;
        mouse.changeAnimation("teasing");
    }

}
