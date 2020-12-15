function Snake (x, y, radius, angle, speed) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.speed = speed;
    this.angle = angle;
    this.isHead = 0;
    this.flagSpeed = speed;
}
Snake.prototype.draw = function (ctx) {
    ctx.save ();
    ctx.translate (this.x, this.y);
    ctx.rotate (this.angle * 1 / 2 * Math.PI);
    draw_snake (ctx, this.radius, this.isHead);
    ctx.restore ();
}
Snake.prototype.update = function (ctx) {
    this.flagSpeed -= 1;
    var tx = [1, 0, -1, 0];
    var ty = [0, 1, 0, -1];
    if (this.flagSpeed <= 0) {
        this.x += tx[this.angle] * 2 * this.radius;
        this.y += ty[this.angle] * 2 * this.radius;
        this.flagSpeed = this.speed;
    }
    if (this.x - this.radius > ctx.canvas.width) {
        this.x = - this.radius;
    }
    if (this.x + this.radius < 0) {
        this.x = ctx.canvas.width + this.radius;
    }
    if (this.y - this.radius > ctx.canvas.height) {
        this.y = -this.radius;
    }
    if (this.y + this.radius < 0) {
        this.y = ctx.canvas.height + this.radius;
    }
}
function Bait (x, y, radius, type) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.type = type;
    this.life = 30;
    this.active = 1;
    if (type) this.radius = 2 * radius;
}
Bait.prototype.draw = function(c) {
    c.save();
    c.translate(this.x, this.y);
    draw_bait(c, this.radius, this.life / 30);
    c.restore();
}
Bait.prototype.update = function (c) {
    this.life %= 30;
    this.life += 1;
    if (this.type == 0) {
        this.life = 30;
    }
    if (this.active == 0) {
        this.life = 0;
    }
}