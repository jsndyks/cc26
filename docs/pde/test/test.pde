void setup () {
    size(300,300);
}

void draw () {
 background(250);
 fill(255,64,16);
 ellipse(mouseX,mouseY,random(20,40),random(20,40));
}

void mouseClicked() {
 println(mouseX,mouseY);
}   