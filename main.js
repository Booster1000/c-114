function preload() {

}

function setup() {
    canvas = createCanvas(800, 600);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
image(video, 0, 0, 800, 600);
fill("red");
circle(50, 50, 70);
circle(750, 50, 70);
circle(750, 550, 70);
circle(50, 550, 70);
fill("orange");
rect(40, 40, 720, 20);
rect(40, 540, 720, 20);
rect(40, 40, 20, 520);
rect(740, 40, 20, 520);
}