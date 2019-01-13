import './prototype';

export default class Canvas {
    constructor(element, width = 640, height = 480) {
        this.element = element;
        this.element.width = width;
        this.element.height = height;
        this.ctx = this.element.getContext('2d');
    }

    animate(callback) {
        this.ctx.clearRect(0, 0, this.element.width, this.element.height);
        callback();
    
        requestAnimationFrame(this.animate.bind(this, callback));
    }

    //Update element size to fill window
    resize() {
        this.element.width = window.innerWidth;
        this.element.height = window.innerHeight;
    }
}