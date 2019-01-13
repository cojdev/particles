import './prototype';
import { $ } from './helper';
import Canvas from './Canvas';
import Field from './Field';
import Emitter from './Emitter';

'use strict';

let mouse;

function init() {
    const cvs = new Canvas($("canvas"), window.innerWidth, window.innerHeight);

    cvs.resize();

    window.evt('resize', cvs.resize, false);

    var network = new Field(cvs.element, 0, 0, 50);
    var emitter = new Emitter(cvs.element, 0, 0, 50, true);
    
    cvs.animate(() => {
        network.render();
        emitter.render();
    });
}

function getMousePos(cvs, evt) {
    var rect = cvs.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}

init();