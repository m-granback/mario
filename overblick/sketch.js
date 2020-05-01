
let marioSprites;
let marioData;
let worldSprites;
let animationR = [];
let animationL = [];
let speed;
let floor1;
let box;
let jump;
let fall;
let gravity;
let bullet;
let bulletX;
let buske;
let animalL = [];
let animalR = [];
let fire = [];
let fireY;
let fireDir;
let munSprut = [];
let munX;
let brunn;
let flower = [];
let flowerY;
let flower2Y;
let animal;
let canon;
let bing =[];
let bing1;
let bing2;
let bingData = [
  {x:0,y:0,w:17,h:17},
  {x:16,y:0,w:17,h:17},
  {x:31.5,y:0,w:17,h:17}]
// 0,0,17,17
// 16,0,17,17
let dir;
let move;
let jumper;
let variable;
let up;

let x;
let y;

function preload(){
  marioData = loadJSON('runright.json');
  marioSprites = loadImage('mario_sprites.png');
  worldSprites = loadImage('world_sprites.png');
  
}

function setup() {
//frameRate(20);
bing1 = false;
gravity = 0.1;
bing2 = false;
flowerY = 190;
flower2Y = 190;
let flowah = worldSprites.get(384,136,16,26);
flower.push(flowah);
flowah = worldSprites.get(400,136,16,26);
flower.push(flowah);
brunn = worldSprites.get(224,0,32,32);
munX = 500;
up = false;
fireY = 220;
fireDir = 10;
bulletX = 220;
jumper = false;
variable = 1;
createCanvas(800, 600);
let munne = worldSprites.get(367,194,30,16);
munSprut.push(munne);
munne = worldSprites.get(367,208,30,16);
munSprut.push(munne);
let firre = worldSprites.get(272,112,16,16);
fire.push(firre);
firre = worldSprites.get(288,112,16,16);
fire.push(firre);
//animal = worldSprites.get(272,224,32,32);
//animal = worldSprites.get(304,224,32,32);
let ani = worldSprites.get(272,224,32,32);
animalL.push(ani);
ani = worldSprites.get(304,224,32,32);
animalL.push(ani);
ani = worldSprites.get(336,224,32,32);
animalL.push(ani);
ani = worldSprites.get(368,224,32,32);
animalL.push(ani);
buske=worldSprites.get(167,0,33,16);
box = worldSprites.get(48,0,17,16);
canon = worldSprites.get(128,85,16,43);
bullet = worldSprites.get(272,97,18,15);
dir = 0;
jump = 0;
fall = 0;
move= 0;
for(let i = 0;i<2;i++){
  let pos = bingData[i];
  let img = worldSprites.get(pos.x,pos.y,pos.w,pos.h);
  bing.push(img);
}

console.log(bingData);
//floor1 = worldSprites.get(63,176,49,10);
floor1 = worldSprites.get(0,31,16,17);
let frames = marioData.frames;
for (let i = 0;i< 3;i++){
  let pos = frames[i].position;
	let img = marioSprites.get(pos.x,pos.y,pos.w,pos.h);
	animationR.push(img);
}
for (let i = 3;i< 6;i++){
  let pos = frames[i].position;
  let img = marioSprites.get(pos.x,pos.y,pos.w,pos.h);
  animationL.push(img);
}
speed=10;
x=100;
y=300
console.log(frames.length);
//console.log(marioData);
// mario still right
// mario = marioSprites.get(211,0,17,17);
//mario still left
// mario = marioSprites.get(181,0,17,17);
// mario run right 1
// mario = marioSprites.get(241,0,17,17);
// mario run right 2
// mario = marioSprites.get(272,0,17,17);
// mario run right 3
// mario = marioSprites.get(300,0,17,17);
// mario instant turn from left to right
// mario = marioSprites.get(331,0,17,17);
// mario in air right
// mario = marioSprites.get(359,0,17,17);
// mario in air left
// mario = marioSprites.get(29,0,17,17);
// mario instant turn from right to left
// mario = marioSprites.get(60,0,17,17);
// mario run left 3
// mario = marioSprites.get(89,0,17,17);
// mario run left 2
// mario = marioSprites.get(121,0,17,17);
// mario run left 1
// mario = marioSprites.get(150,0,17,17);
// mario sit / die
// mario = marioSprites.get(0,16,17,17);
//mario = marioSprites.get(211,0,17,17);

}

function draw() {
  background(100,100,255);
  textSize(30);

  // Om hoppat på första frågan
  if(bing1 == true && flowerY > 135){
    flowerY-=1;
  }
  // Om hoppat på andra frågan
  if(bing2 == true && flower2Y > 135){
    flower2Y-=1;
  }
  
  // Bowsers eld
  if(frameCount > 400 && frameCount < 1100){
    munX-=1;
    let munni = floor(variable/5)%munSprut.length;
    image(munSprut[munni],munX,270,150,45);
  }
  // Vertikala eldklotet
  fireY+=fireDir;
  if(fireY < 220 || fireY > height+500){
    fireDir = -fireDir;
  }
  // Vilket utseende på eldklotet
  if(fireDir < 1){

    image(fire[0],700,fireY,70,70);
  }
  if(fireDir > -1){
    image(fire[1],700,fireY,70,70);
  }
  // console text
  text(x,30,30);
  bulletX-=5;
  if(bulletX<-250){
    bulletX = 200;
  }
  // Kulan
  image(bullet,bulletX,240,55,45);
  
  // Busken
  image(buske,500,320,140,70);

  // Kanonen
  image(canon,200,240,70,170);
  // En generell variabel ist för frameCount
  variable+=0.4;

  // Den högra boxen
  image(box,420,180,58,58);

  // Varva bild för objekt
  let index = floor(variable/8)%bing.length;
  
  // Vänstra blomman
  image(flower[index],303,flowerY,50,50);
  
  // Högra blomman
  image(flower[index],363,flower2Y,50,50);

  // Om hoppat på fråga1 eller inte
  if(bing1 == false){

    image(bing[index],300,180,60,60);
  } else {image(bing[1],300,180,60,60);}
  // Om hoppat på fråga2 eller inte
  if(bing2 == false){
    image(bing[index],360,180,60,60);
  } else{image(bing[1],360,180,60,60);}
  //image(bing[index],360,180,60,60);

  // Bowser
  let anie = floor(variable/7)%animalL.length;
  image(animalL[anie],500+x/20,230,160,160);
  
  // Marken första raden
  for(let i = 2;i<11;i++){
    image(floor1,i*60,390,60,60);

  }
  // Marken andra raden
  for(let i = 2;i<11;i++){
    image(floor1,i*60,448,60,60);

  }
  //image(floor1,100, 390,200,30);
  //image(floor1,300,390,200,30);
  //image(floor1,500,390,200,30);

  // Om hoppknapp aktiverad
  if(jumper){
    if(!up){

      y-=16;
    }
// Olika nivåer för hopp mario i y-led

    if(x<222 && y < 100 || x > 489 && y < 100){
      up = true;
    }
    if(x>221 && x <490&& y < 240){
      up = true;
      if(x < 320){
// Fråga1 aktiveras
        bing1 = true;
      }
      if(x > 319){
        // Fråga2 aktiveras
        bing2 = true;
      }
    }
    // Gravitation typ
    if(up && y < 300){

      y+=8;

    }
    // Landa på marken, hopp klart, redo på nytt
    if(y>299){
      y= 300;
      up=false;
      jumper = false;
    }

  }
  if(keyIsDown(LEFT_ARROW)){
    dir = 1;

  }
  if(keyIsDown(RIGHT_ARROW)){
    dir = 2;
  }
  if(keyIsDown(DOWN_ARROW) && dir == 0){
    dir = 5;
  }
  if(keyIsDown(DOWN_ARROW) && dir == 3){
    dir = 4;
  }
  if(keyIsDown(UP_ARROW)){
    if(!jumper){jumper = true;}

  }
//line(x+50,300,x+50,100);
//if(speed>0){
  //image(animationR[1],x,300,100,100);
//}
//if(speed<0){
  //image(animationL[frameCount%animationL.length],x,300,100,100);
//}
x+=move*speed;
y+=fall;
switch(dir){

  case 0:
    // stå höger
    mario = marioSprites.get(211,0,17,17);
    image(mario,x,y,100,100);
    break;
    
  case 2:
    // spring höger
    let index2 = floor(variable)%animationR.length;
    image(animationR[index2],x,y,100,100);
  move=1;
  break;

  case 1:
    // spring vänster
    let index3 = floor(variable)%animationL.length;
    image(animationL[index3],x,y,100,100);
    move=-1;
    break;
  case 3:
    //stå vänster
    
    mario = marioSprites.get(181,0,17,17);
    image(mario,x,y,100,100);
    break;
    case 4:
      //vänster sitt
      mario = marioSprites.get(0,16,17,17);
      image(mario,x,y+30,80,80);
      break;
    case 5:
      //höger sitt
      mario = marioSprites.get(0,16,17,17);
      image(mario,x,y+30,80,80);
      break;


}
//image(mario,300,300,100,100);

// Ramla ned på sidorna
if(x < 80 || x > width-165){fall+=1;}

// Sugas in i brunn
if(x > 90 && x < 130 && y < 245){
up=false;
  fall = -3;
}

// Om fallit ned
if(y > height+100){
  fall = 0;
  y = -100;
  x = 350;
  jumper = true;
}
//if(x > width){jump +=1}
  console.log(dir);

  // Brunnen
  push();
  translate(200,100);
  //rotate(329.9);
  rotate(630/200);
  image(brunn,0,0,120,120);
  pop();

  
}
//function keyPressed(){
  //if(keyCode == LEFT_ARROW){
    // gå vänster
    //dir=1;
  //} 
  //if(keyCode == RIGHT_ARROW){
    // gå höger
    //dir=2;
    
  //}
  //if(keyCode == DOWN_ARROW && dir == 0){
    // sitt höger
    //dir = 5;
  //}
  //if(keyCode == DOWN_ARROW && dir == 3){
    // sitt vänster
    //dir = 4;

  //}
//}

function keyReleased(){
  if(dir == 2){
// stå höger
    dir = 0;
  }
  if(dir==1){
// stå vänster
  dir = 3;
  }
  // om sitt vänster
  if(dir == 4){
    // stå vänster
    dir = 3;
  }
  // om sitt höger
  if(dir == 5){
    // stå höger
    dir = 0;
  }
  move = 0;
}
