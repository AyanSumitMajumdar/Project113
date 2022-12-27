function preload(){
}
function setup(){
 canvas=createCanvas(640,480);
 canvas.position(110,250);
 video=createCapture(VIDEO);
 video.hide();
}

function draw(){
 image(video,0,0,640,480);

 circle(35,35,60);
 fill(0,128,0);

 rect(10,65,55,355,20);
 fill(200,0,0);

 circle(40,450,60);
 fill(200,0,0);

 circle(605,35,60);
 fill(200,0,0)

 rect(578,65,55,355,20);
 fill(200,0,0)
 
 circle(605,450,60);
 fill(200,0,0)

 rect(65,10,510,55,20);
fill(0,128,0)

 rect(70,420,505,55,20);
 fill(0,128,0);
}

function take_snapshot(){
    save('Ayan.png');
  }