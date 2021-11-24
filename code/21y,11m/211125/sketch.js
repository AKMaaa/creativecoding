var li_w=40;
var step_x=li_w*4;
var step_y=li_w*4;

function setup() {
  createCanvas(970.8204,800);
  colorMode(HSB,360,100,100,100);     
  background("#333333");
  margin();
  line_rn();
}

function draw() {
 
}
var r=0;
var rn=0;
function line_rn(){
  for(var y=step_y+40;y<height;y+=step_y){
    for(var x=step_x-20;x<width-li_w;x+=step_x){
      rn=floor(random(0,2));
      stroke("#FFFFFF");
      strokeWeight(1);
      push();
      translate(x,y);
      if(rn==1){
      line(0,0,60,0);
      line(0,-60,0,0);
      line(10,-50,10,10);
      line(10,10,70,10);
    }else{
      ellipse(30,-30,60,60);
      ellipse(35,-30+floor(random(-5,6)),60,60); 
    }
      pop();
    }
  }
}

function margin(){
  noFill();
  stroke("#FFFEF9");
  strokeWeight(li_w);
  rect(0,0,width,height);
}