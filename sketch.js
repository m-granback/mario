
// Brunnen fungerar bra med avgränsning, applicera på boxers och bingers
let marioSprites;
let xVel;
let marioData;
let worldSprites;
let animationR = [];
let animationL = [];
let speed;
let floor1;
let music;
let hider;
let ugglor = [];
let ugglebild = [];
let floorlevel;
let box;
let fence;
let jump;
let fall;
let gravity;
let velocity;
let bullet;
let headkick;
let bulletX;
let index;
let buske;
let animalL = [];
let animalR = [];
let fire = [];
let fireY;
let fireDir;
let munSprut = [];
let munX;
let brunners = [];
let flower = [];
let flowerY;
let flower2Y;
let animal;
let coinSound;
let brakeSound;
let released;
let canon;
let boxers = [];
let bing = [];
let bingers = [];
let itsme;
let bingData = [
    { x: 0, y: 0, w: 17, h: 16 },
    { x: 16, y: 0, w: 17, h: 16 },
    { x: 31.5, y: 0, w: 17, h: 16 }]
// 0,0,17,17
// 16,0,17,17
let dir;
let move;
let jumping;
let variable;
let up;
let floorStart;
let x;
let y;
let jumpSound;
let yVel;
let marioL, marioR, marioT, marioB;

function preload() {
    marioData = loadJSON('runright.json');
    marioSprites = loadImage('mario_sprites.png');
    worldSprites = loadImage('world_sprites.png');
    //music = loadSound('music.mp3');
    //jumpSound = loadSound('jump.wav');
    //itsme = loadSound('itsme.mp3');
    //headkick = loadSound('headkick.wav');
    //coinSound = loadSound('coin.wav');
    //breakSound = loadSound('blockbreak.wav');

}

function setup() {
    //itsme.play();
    //music.play();
    //music.setVolume(0.2);
    xVel = 0;
    fence = worldSprites.get(35,32,41,16);
    //frameRate(20);
    let ugglefan = worldSprites.get(272, 16, 16, 16);
    ugglebild.push(ugglefan);
    ugglefan = worldSprites.get(288, 16, 16, 16);
    ugglebild.push(ugglefan);
    ugglefan = worldSprites.get(304, 16, 16, 16);
    ugglebild.push(ugglefan);
    released = true;
    hider = worldSprites.get(128, 16, 16, 16);
    bingers.push(new Bing(100, 350));
    bingers.push(new Bing(150, 350));
    bingers.push(new Bing(50, 200));
    boxers.push(new Box(50, 350));
    boxers.push(new Box(200, 350));
    brunners.push(new Brunn(600, 450));
    yVel = 0;
    floorlevel = 0;
    floorStart = 0;
    gravity = 1;
    velocity = 0;
    flowerY = 350;
    flower2Y = 350;
    let flowah = worldSprites.get(384, 136, 16, 26);
    flower.push(flowah);
    flowah = worldSprites.get(400, 136, 16, 26);
    flower.push(flowah);

    brunn = worldSprites.get(224, 0, 32, 32);
    for(let i = 0;i<2;i++){

        ugglor[i] = new Uggla(i*100+200, 500);
    }
    munX = 500;
    up = false;
    fireY = 220;
    fireDir = 10;
    bulletX = 220;
    jumping = false;
    variable = 1;
    createCanvas(800, 600);
    let munne = worldSprites.get(367, 194, 30, 16);
    munSprut.push(munne);
    munne = worldSprites.get(367, 208, 30, 16);
    munSprut.push(munne);
    let firre = worldSprites.get(272, 112, 16, 16);
    fire.push(firre);
    firre = worldSprites.get(288, 112, 16, 16);
    fire.push(firre);
    //animal = worldSprites.get(272,224,32,32);
    //animal = worldSprites.get(304,224,32,32);
    let ani = worldSprites.get(272, 224, 32, 32);
    animalL.push(ani);
    ani = worldSprites.get(304, 224, 32, 32);
    animalL.push(ani);
    ani = worldSprites.get(336, 224, 32, 32);
    animalL.push(ani);
    ani = worldSprites.get(368, 224, 32, 32);
    animalL.push(ani);
    buske = worldSprites.get(167, 0, 33, 16);
    box = worldSprites.get(48, 0, 17, 16);
    canon = worldSprites.get(128, 85, 16, 43);
    bullet = worldSprites.get(272, 97, 18, 15);
    dir = 0;
    jump = false;
    fall = 0;
    move = 0;
    for (let i = 0; i < 2; i++) {
        let pos = bingData[i];
        let img = worldSprites.get(pos.x, pos.y, pos.w, pos.h);
        bing.push(img);
    }

    //console.log(bingData);
    //floor1 = worldSprites.get(63,176,49,10);
    floor1 = worldSprites.get(0, 32, 16, 16);
    let frames = marioData.frames;
    for (let i = 0; i < 3; i++) {
        let pos = frames[i].position;
        let img = marioSprites.get(pos.x, pos.y, pos.w, pos.h);
        animationR.push(img);
    }
    for (let i = 3; i < 6; i++) {
        let pos = frames[i].position;
        let img = marioSprites.get(pos.x, pos.y, pos.w, pos.h);
        animationL.push(img);
    }
    speed = 10;
    x = 50;
    y = 550 + floorlevel;
    //console.log(frames.length);
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
    // mario = marioSprites.get(211,0,17,17);

}

function draw() {
    background(100, 100, 255);

    x += xVel;
    xVel *= 0.8;
    yVel += gravity;
    y += yVel;
    marioL = x;
    marioR = x + 50;
    marioT = y;
    marioB = y + 50;
    textSize(20);
    /*
    // Om hoppat på första frågan
    if(bing1 == true && flowerY > 305){
      flowerY-=1;
    }
    // Om hoppat på andra frågan
    if(bing2 == true && flower2Y > 305){
      flower2Y-=1;
    }
    */
    /*
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
    */
    // console text
    /*
    bulletX-=5;
    if(bulletX<-250){
      bulletX = 200;
     }
     */
    // Kulan
    //image(bullet,bulletX,240,55,45);
     image(fence,400,485,104,64);
     image(fence,319,485,104,64);
    // Busken
    image(buske, 50, 450, 150, 100);

    // Kanonen
    //image(canon,200,240,70,170);
    // En generell variabel ist för frameCount
    variable += 0.4;

    // Den högra boxen
    //image(box,400,350,50,50);

    // Varva bild för objekt
    index = floor(variable / 8) % bing.length;

    // Vänstra blomman
    image(flower[index], 100, flowerY, 50, 50);

    // Högra blomman
    image(flower[index], 150, flower2Y, 50, 50);

    /*
    // Om hoppat på fråga1 eller inte
    if(bing1 == false){
      
      image(bing[index],300,350,50,50);
    } else {image(bing[1],300,350,50,50);}
    // Om hoppat på fråga2 eller inte
    if(bing2 == false){
      image(bing[index],350,350,50,50);
    } else{image(bing[1],350,350,50,50);}
    //image(bing[index],360,180,60,60);
    */
    /* // Bowser
    let anie = floor(variable/7)%animalL.length;
    image(animalL[anie],500+x/20,230,160,160);
    */
    // Marken första raden
    /*
    for(let i = 0;i<8;i++){
      image(floor1,i*60,390,60,60);
      
     }
     // Marken andra raden
     for(let i = 0;i<9;i++){
       image(floor1,i*60,448,60,60);
       
     }
     */
    for (let i = 0; i < width; i += 50) {
        image(floor1, i, 550, 50, 50);

    }
    /*
    for(let i = 0;i<14;i++){
      image(floor1,i*60,564,60,60);
      
    }
    */



    //x+=move*speed;
    /*
    if(x <471 && y > 200){
      floorlevel = 0;
      floorStart = 0;
    }
    
    if(x > 470 && x < 531){
      floorlevel = 60;
      floorStart = 490;
    }
    if(x > 530 && x < 591){
      floorlevel = 110;
      floorStart = 550;
    }
    if(x > 590 && x < 620){
      floorlevel = 170;
      floorStart = 610;
    }
    */
    if (y > 501 + floorlevel) {
        yVel = 0;
        jumping = false;
        y = 500 + floorlevel;

    }

    //text(floorStart,50,50);
    //text('x: '+x,30,30);
    //text('y: '+y,190,30);
    /*
    if(x > 600 && y < 350){
      floorlevel = 48;
    }
    */
    if (x > width - 50) {
        x = width - 50;
    }
    if (x < 0) {
        x = 0;
    }


    //text('185',0,185);
    //text('90',0,90);
    /*
    line(0,185,500,185);
    line(0,90,500,90);
    line(x,0,x,height);
    line(x+87,0,x+87,height);
    line(0,y,width,y);
    line(0,y+100,width,y+100);
*/
    // for (let i = 0; i < height; i += 50) {
    //     line(0, i, width, i);
    //     text(i, 0, i);
    // }
    // for (let j = 0; j < width; j += 50) {
    //     line(j, 0, j, height);
    //     text(j, j, 20);
    // }

    switch (dir) {

        case 0:
            // stå höger
            mario = marioSprites.get(211, 0, 14, 15);
            image(mario, x, y, 50, 50);
            break;

        case 2:
            // spring höger
            let index2 = floor(variable) % animationR.length;
            image(animationR[index2], x, y, 50, 50);
            move = 1;
            xVel = 7;
            break;

        case 1:
            // spring vänster
            let index3 = floor(variable) % animationL.length;
            image(animationL[index3], x, y, 50, 50);
            move = -1;
            xVel = -7
            break;
        case 3:
            //stå vänster

            mario = marioSprites.get(181, 0, 14, 15);
            image(mario, x, y, 50, 50);
            break;
        case 4:
            //vänster sitt
            mario = marioSprites.get(0, 16, 17, 17);
            //image(mario, x+10, y + 25, 35, 35);
            image(hider, x, y, 50, 50);
            break;
        case 5:
            //höger sitt
            mario = marioSprites.get(0, 16, 17, 17);
            //image(mario, x+10, y + 25, 35, 35);
            image(hider, x, y, 50, 50);
            break;



        // Brunnen

    }
    /* push();
    translate(200,100);
    //rotate(329.9);
    rotate(630/200);
    image(brunn,0,0,120,120);
    pop();
      */

    // Rita brunnarna, boxarna, bingers
    for (let i = 0; i < brunners.length; i++) {
        brunners[i].show();
    }
    for (let i = 0; i < bingers.length; i++) {
        bingers[i].show();
    }
    for (let i = 0; i < boxers.length; i++) {
        boxers[i].show();
    }

    for (let i = 0; i < brunners.length; i++) {
        // stå på brunn
        if (yVel != 0 && marioR > brunners[i].l && marioL < brunners[i].r && marioB < brunners[i].b && marioT > brunners[i].t - 52) {
            yVel = 0;
            y = brunners[i].t - 51;
            jumping = false;
        }
        // sidledes
        if (marioT < brunners[i].b && marioB > brunners[i].t) {
            if (marioR > brunners[i].l && marioR < brunners[i].l + 10) {
                //xVel *= -0.5;
                //x = brunners[i].l - 50;
                xVel *= -0.5;
                x -= 5;
            }
            if (marioL < brunners[i].r && marioL > brunners[i].r - 10) {
                xVel *= -0.5;
                x += 5;
            }
        }
    }
    for (let i = 0; i < bingers.length; i++) {
        if (yVel != 0 && marioR > bingers[i].l && marioL < bingers[i].r && marioB < bingers[i].b && marioT > bingers[i].t - 52) {
            yVel = 0;
            y = bingers[i].t - 51;
            jumping = false;
        }
        if (marioT < bingers[i].b && marioB > bingers[i].t) {
            if (marioR > bingers[i].l && marioR < bingers[i].l + 10 || marioL < bingers[i].r && marioL > bingers[i].r - 10) {
                //x = bingers[i].l - 50;
                xVel *= -0.5;
            }

        }

        if (jumping && marioR > bingers[i].l && marioL < bingers[i].r && marioT < bingers[i].b && marioB > bingers[i].t) {

            yVel = 26;
            if(bingers[i].touched == false){
            bingers[i].touched = true;
            //coinSound.play();
            }
        }

    }
    //--------------------------------------------------------------------------------------------------------------
    for (let i = 0; i < boxers.length; i++) {
        if (yVel != 0 && marioR > boxers[i].l && marioL < boxers[i].r && marioB < boxers[i].b && marioT > boxers[i].t - 52) {
            yVel = 0;
            y = boxers[i].t - 51;
            jumping = false;
        }
        if (marioT < boxers[i].b && marioB > boxers[i].t) {
            if (marioR > boxers[i].l && marioR < boxers[i].l + 10 || marioL < boxers[i].r && marioL > boxers[i].r - 10) {
                xVel *= -0.5;
            }

        }

        if (jumping && marioR > boxers[i].l && marioL < boxers[i].r && marioT < boxers[i].b && marioB > boxers[i].t) {

            yVel = 26;
            if(boxers[i].touched == false){

                boxers[i].touched = true;
                //breakSound.play();

            }

        }
        if (boxers[i].touched) {
            boxers.splice(i, i + 1);
        }
    }
    //--------------------------------------------------------------------------------------------------------------


    if (keyIsDown(LEFT_ARROW)) {
        dir = 1;

    }
    if (keyIsDown(RIGHT_ARROW)) {
        dir = 2;
    }
    if (keyIsDown(DOWN_ARROW) && dir == 0) {
        dir = 5;
    }
    if (keyIsDown(DOWN_ARROW) && dir == 3) {
        dir = 4;
    }
    if (keyIsDown(UP_ARROW)) {
        if (!jumping) {
            //jumpSound.play();

            yVel = -26;
            jumping = true;
        }

    }
    for (let i = 0; i < ugglor.length; i++) {
        ugglor[i].show();
    }

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

function keyReleased() {


    if (dir == 2) {
        // stå höger
        dir = 0;
    }
    if (dir == 1) {
        // stå vänster
        dir = 3;
    }
    // om sitt vänster
    if (dir == 4) {
        // stå vänster
        dir = 3;
    }
    // om sitt höger
    if (dir == 5) {
        // stå höger
        dir = 0;
    }
    move = 0;

}

class Bing {

    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.l = x;
        this.r = this.x + 50;
        this.t = this.y;
        this.b = this.y + 50;
        this.touched = false;
    }
    show() {
        if (this.touched) {
            image(bing[1], this.x, this.y, 50, 50);
        }
        if (!this.touched) {
            image(bing[index], this.x, this.y, 50, 50);
        }
    }

}

class Box {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.l = x;
        this.t = y;
        this.r = this.x + 50;
        this.b = this.y + 50;
        this.touched = false;

    }
    show() {
        if (!this.touched) {

            image(box, this.x, this.y, 50, 50);
        }
    }
}

class Brunn {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.l = x;
        this.r = this.x + 100;
        this.t = this.y;
        this.b = this.y + 100;
    }
    show() {
        image(brunn, this.x, this.y, 100, 100);
    }
}

class Uggla {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.dirre = 1;
        this.smashed = false;
    }
    show() {
        this.x += this.dirre;
        if (this.x > 549 || this.x < 1) {
            this.dirre *= -1;
        }
        for(let i = 0;i<ugglor.length;i++){
            if(ugglor[i] != this){
                
                if(this.x < ugglor[i].x+50 && this.x+50 > ugglor[i].x){
                    this.dirre *= -1;

            }
                
            }
        }
        if(yVel > 1&&!this.smashed &&this.y - marioT < 50&& this.x<marioR&& this.x+50>marioL){
            
            this.dirre = 0;
            xVel=random(-8,+8);
            yVel =-10;
            this.smashed = true;
            //headkick.play();
        }else {
            if(!this.smashed){

                image(ugglebild[index], this.x, this.y, 50, 50);
            } else{
                strokeWeight(1);
                fill(90);
                rect(this.x-7,this.y-14,64,64);
                strokeWeight(5);
                line(this.x+25,this.y+50,this.x+25,this.y-5);
                line(this.x,this.y+10,this.x+50,this.y+10);
                image(ugglebild[2],this.x,this.y,50,50);
                    
            }
        }
        
    }
}
