export default class Particle {
    constructor(canvas, x, y, diameter) {
        // Check if Canvas class is being used
        this.canvas = canvas.element ? canvas.element : canvas;
        this.ctx = this.canvas.getContext('2d');

        this.x = x || 0;
        this.y = y || 0;

        this.diameterDefault = diameter || 2 + Math.random() * 8;
        this.diameter = this.diameterDefault;

        this.vx = 0;
        this.vy = 0;
        this.speed = Math.random() * .2 + .5;
        this.angle = Math.random() * 360;
        this.age = 0;

        const hue = Math.floor(Math.random()*360);

        this.fill = 'hsl('+hue+', 95%, 70%)';
        this.outline = Math.random() > .5 ? true : false;
    }

    emit(life) {
        let s = this.speed * 2;
        this.angle = this.angle + Math.random() * 10 - 5;
        this.x += s * Math.cos(this.angle * Math.PI / 180);
        this.y += s * Math.sin(this.angle * Math.PI / 180);
        this.age += 1 / life;
        this.overflow();
    }

    overflow(
        top = 0,
        right = this.canvas.width,
        bottom = this.canvas.height,
        left = 0
    ) {
        if (this.x < left) this.x = right;
        if (this.x > right) this.x = left;
        if (this.y < top) this.y = bottom;
        if (this.y > bottom) this.y = top;
    }

    shrink() {
        this.diameter = (1 - this.age) * this.diameterDefault;
    }

    draw() {
        let { ctx, x, y, diameter, fill } = this;

        ctx.beginPath();
        ctx.fillStyle = fill;
        ctx.strokeStyle = fill;
        ctx.lineWidth = 2;
        ctx.arc(x, y, diameter, 0, 2 * Math.PI);
        ctx.closePath();
        
        this.outline !== true ? ctx.fill() : ctx.stroke();
    }
}