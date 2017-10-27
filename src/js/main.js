/**
 * Author: Charles Ojukwu
 */

(function () {

'use strict';

var canvas,
	ctx,
	pixelRatio,
	mousePos;

//Onload function
function init () {
	//Canvas setup
	canvas = document.getElementById("canvas");
	ctx = canvas.getContext("2d");
	//For "Retina" Displays
	ctx.scale(2,2);
	pixelRatio = Math.round(window.devicePixelRatio) || 1;

	//Make canvas fill the screen
	resizeCanvas();
	window.addEventListener('resize', resizeCanvas, false);

	//Particle Network
	var test = new network({
		size: 150,
		maxDist: 200,
		mouse: true,
		colour: "#ff0000"
	});

	function animate (canvas_id) {
		//Clear the canvas
		var cvs = document.getElementById(canvas_id);
		cvs.getContext("2d").clearRect(0, 0, cvs.width, cvs.height);
		test.render();
		requestAnimationFrame(function () {
			animate(canvas_id);
		});
	}

	animate("canvas");
}

function scene () {

}

function network (args) {

	args = args || {};

	var self = this;

	self.size = args.size || 75;
	self.maxDist = args.maxDist || 200;
	self.colour = args.colour || "#000000";

	self.particles = [];
	for (var i = 0; i < self.size; i++) {
		self.particles[i] = new particle(
			(Math.random() * (canvas.width + self.maxDist)) - (self.maxDist / 2),
			(Math.random() * (canvas.height + self.maxDist)) - (self.maxDist / 2)
		);
	}

	//Check mouse position
	if (args.mouse === true) {
		var mouseParticle = new particle();
		document.body.addEventListener("mousemove",function(evt){
			mousePos = getMousePos(canvas,evt);
			mouseParticle.x = mousePos.x;
			mouseParticle.y = mousePos.y;
		});
	}

	//Draw lines between nearby particles
	self.collision = function (obj, dist) {
		var temp;
		for (var i = 0; i < self.particles.length; i++) {
			//Don't interact with self
			if (obj !== self.particles[i]) {
				temp = Math.sqrt(Math.pow((obj.x - self.particles[i].x),2) + Math.pow((obj.y - self.particles[i].y),2));
				if (temp < dist) {
					var midx = (obj.x + self.particles[i].x) / 2;
					var midy = (obj.y + self.particles[i].y) / 2;
					ctx.strokeStyle = "rgba("+Math.floor(255*(midx/canvas.width))+",50,"+Math.floor(255*((canvas.width - midx)/canvas.width))+"," + Math.pow((dist-temp)/dist,5) + ")";
					//Start drawing
					ctx.beginPath();
					ctx.moveTo(obj.x, obj.y);
					ctx.lineTo(self.particles[i].x, self.particles[i].y);
					ctx.closePath();
					ctx.stroke();
				};
			}
		};
	};

	//Update particle positions
	self.update = function (obj) {
		//Velocity
		obj.x += obj.vx;
		obj.y += obj.vy;
		//Boundary overflow
		if (obj.x > canvas.width+(self.maxDist/2)) {
		obj.x = -(self.maxDist/2);
		}
		else if (obj.xpos < -(self.maxDist/2)) {
			obj.x = canvas.width+(self.maxDist/2);
		}
		if (obj.y > canvas.height+(self.maxDist/2)) {
			obj.y = -(self.maxDist/2);
		}
		else if (obj.y < -(self.maxDist/2)) {
			obj.y = canvas.height+(self.maxDist/2);
		}	
	};
	//
	self.render = function () {
		if (args.mouse === true) {
			self.collision(mouseParticle, self.maxDist*2);
			mouseParticle.render();
		}
		//Particle interaction
		for (var i = 0; i < self.particles.length; i++) {
			self.collision(self.particles[i], self.maxDist);
			self.update(self.particles[i]);
			self.particles[i].render();
		}
	}

	self.animate = function () {
		//Clear the canvas
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		self.render();
		requestAnimationFrame(self.animate);
	}
	//Logging
	console.log(
		self.particles.length + " particles generated\n"+
		"Maximum gap: " + self.maxDist
	);
	
}

//Particle constructor
function particle (x,y) {
	var self = this;
	self.x = x || 1;
	self.y = y || 1;
	self.vx = (Math.random()*1)-.5;
	self.vy = (Math.random()*1)-.5;
	self.dia = 2 * pixelRatio;

	self.render = function () {
		ctx.beginPath();
		ctx.fillStyle = "rgb("+Math.floor(255*(self.x/canvas.width))+",50,"+Math.floor(255*((canvas.width - self.x)/canvas.width))+")";
		if(self.dia){
			ctx.arc(self.x,self.y,self.dia,0,2*Math.PI);
		}else{
			ctx.arc(self.x,self.y,2,0,2*Math.PI);
		}
		ctx.closePath();
		ctx.fill();
	}
}

//Make the canvas fill the screen
function resizeCanvas() {
	canvas.width = window.innerWidth * pixelRatio;
	canvas.height = window.innerHeight * pixelRatio;
	//Necessary on devices with pixelRatio above 1
	canvas.style.width = window.innerWidth + "px";
	canvas.style.height = window.innerHeight + "px";
}
//Get Mouse Position
function getMousePos(cvs, evt) {
	var rect = cvs.getBoundingClientRect();
	return {
		x: evt.clientX - rect.left,
		y: evt.clientY - rect.top
	};
}

//Execute when DOM has loaded
document.addEventListener('DOMContentLoaded',init,false);

})();