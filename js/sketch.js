var particles = [];
var bg;

function setup() {
    var numparticles = .00007 * (windowWidth * windowHeight);
    createCanvas(windowWidth, windowHeight);
    for (var i = 0; i < numparticles; i++) {//makes 170 particles, random posns
        particles.push(new Particle(createVector(random(width), random(height))));
    }
}

function draw() {
    clear();
    background(0, 0);
    var p;
    for (var i = particles.length - 1; i >= 0; i--) {//run through particles and update posns
        p = particles[i];
        p.run();
    }
}

//////////////////////PARTICLE CLASS///////////////////

var Particle = function (position) {
    this.acceleration = createVector(0, 0.05);
    this.velocity = createVector(random(-0.5, 0.5), random(-0.5, 0.5));
    this.position = position.copy();
};

Particle.prototype.run = function () {//use every frame
    this.update();//update posns
    this.display();////display particles
    this.intersects();//check for intersecting particles
};

// Method to update position
Particle.prototype.update = function () {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.acceleration.mult(-0.1);
    if (this.position.x < 0) this.position.x = width;//handles particles going offscreen
    if (this.position.x > width) this.position.x = 0;
    if (this.position.y < 0) this.position.y = height;
    if (this.position.y > height) this.position.y = 0;
};

// Method to work out collisions and line proximity
Particle.prototype.intersects = function () {
    for (var i = 0; i < particles.length; i++) {
        var other = particles[i];
        if (other != this) {//dont collide with self
            var dir = p5.Vector.sub(this.position, other.position);
            if (dir.mag() < 12) {//close enough for collision
                dir.setMag(0.1);
                this.applyForce(dir);
            }

            if (dir.mag() < 100) {//close enough for vector between particles
                stroke(255, 50);
                strokeWeight(1.0);
                line(this.position.x, this.position.y, other.position.x, other.position.y);
            }
        }
    }
};

Particle.prototype.applyForce = function (f) {
    this.acceleration.add(f);
};

// Method to display
Particle.prototype.display = function () {
    noStroke();
    fill(255, 200);
    ellipse(this.position.x, this.position.y, 4, 4);
    var mPos = createVector(mouseX, mouseY);//mouse posn vector
    var dir = p5.Vector.sub(this.position, mPos);
    if (dir.mag() < 160) {//draw a line within 160px
        stroke(255, 70);
        strokeWeight(1.0);
        line(this.position.x, this.position.y, mouseX, mouseY);
    }
};