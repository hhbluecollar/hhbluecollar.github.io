function setup(){
    createCanvas(500,500);
    p1 = new particle(300,300,true);
    p2 = new particle(300,300,false);

}

function draw(){
    background(0);
    p1.update();
    p1.show();
    p2.update();
    p2.show();
}