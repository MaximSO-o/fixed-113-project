function preload(){
}

function setup()
{
    canvas = createCanvas(640, 480);
    
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();

}

function draw()
{
    image(video, 160, 110, 320, 240);
    fill(0, 255, 0,);
    rect(50, 30, 20, 420);
    rect(50, 40, 500, 20);
    rect(50, 410, 500, 20);
    rect(570, 30, 20, 420);

    fill(255,0,0);
    circle(580, 50, 70);
    circle(580, 420, 70);
    circle(60, 420, 70);
    circle(60, 60, 70);
   
}

function take_snapshot()
{
    save('friends.png');
}

