(function() {
	"use strict";

	function VisualTimer(opts) {
		this.type = 'down';
		if (opts.type) {
			this.type = opts.type;
		}
		this.totalTime = opts.seconds;
		this.game = opts.game;
		this.onComplete = opts.onComplete;
		this.color = opts.color;
		var key = 'timer';
		if (opts.key) {
			key = opts.key;
		}
		this.manaCounter = this.game.add.text(opts.x + 160, opts.y, 0, { font: '16px Arial', fill: 'red', align: 'center' })
		this.game.add.sprite(opts.x, opts.y, key, 1);
		this.sprite = this.game.add.sprite(opts.x, opts.y, key, 0);
		this.sprite.tint = this.color;
		this.fullWidth = this.sprite.width;
		this.reset();
	}

	VisualTimer.prototype = {
		reset: function() {
			if (this.timer) {
				this.timer.stop();
			}
			var self = this;
			this.hasFinished = false;
			this.timer = this.game.time.create(true);
			this.timer.repeat(50, 1000, timerTick, this);
			this.timer.onComplete.add(function() {
				self.hasFinished = true;
				if (self.onComplete) {
					self.onComplete();
				}
			});
			this.rect = new Phaser.Rectangle(0, 0, 0, this.sprite.height);
			if (this.type == 'down') {
				this.sprite.crop(null);
			} else {
				this.sprite.crop(this.rect);
			}
		},

		setTime: function(seconds) {
			this.totalTime = seconds;
			this.start();
		},

		start: function() {
			this.reset();
			this.timer.start();
		},

		stop: function() {
			this.timer.stop();
		},

		pause: function() {
			this.timer.pause();
		},

		resume: function() {
			this.timer.resume();
		},

		remainingTime: function() {
			return this.totalTime - this.timer.seconds;
		}
	};


	function timerTick() {
		/*jshint validthis:true */
		var myTime = (this.type == 'down') ? this.remainingTime() : this.timer.seconds;
		this.rect.width = Math.max(0, (myTime / this.totalTime) * this.fullWidth);
		this.sprite.crop(this.rect);
		if (this.timer.seconds >= this.totalTime){
			this.timer.stop();
		}
	}


	if (module) {
		module.exports = VisualTimer;
	}
})();