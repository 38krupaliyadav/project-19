var op1, closed, gr, dg, gm, dm, run, dog;

function preload(){
   gm = loadAnimation("guyrunning.png", "running_1.png", run);
   dm = loadAnimation("dg1.png", "dg2.png", dog);
}

function setup(){
    createCanvas(800, 800);

    gr = createSprite(400, 400);
    gr.addAnimation(gm, run)
}
function draw(){
    drawSprites();
}
