/***===============================***/
/***       Level 01: target A      ***/
/***===============================***/
var level_02_E = new Sprite();
	// Is the BGM playing?
	level_02_E.bgm = false;

	/***==================================***/
	/***          room.create()           ***/
	/***==================================***/
	// What to do at creation time
	level_02_E.create = function() {
		var sway_x = 0;
		var sway_y = 0;
		
		/***=================================***/
		/***         Passive sprites         ***/
		/***=================================***/
		// Sprites to be drawn, but without interactivity
		level_02_E.image_background = new Sprite();
		level_02_E.image_background.width  = 1080;
		level_02_E.image_background.height = 720;
		level_02_E.image_background.x = 0;
		level_02_E.image_background.y = 0;
		level_02_E.image_background.image = Textures.load
			("./Common/Textures/Level 02/target E background.png");
		level_02_E.image_background.i = 0;
		level_02_E.image_background.update = function() {
			level_02_E.image_background.y = Math.sin(sway_x) * 20;
			sway_x += 0.009 * Math.random();
			level_02_E.image_background.x = Math.sin(sway_y) * 20;
			sway_y += 0.02 * Math.random();;
			if(sway_x >= 2*Math.PI) sway_x = 0;
			if(sway_y >= 2*Math.PI) sway_y = 0;
		}
			
		level_02_E.image_scope = new Sprite();
		level_02_E.image_scope.width  = 1080;
		level_02_E.image_scope.height = 720;
		level_02_E.image_scope.x = 0;
		level_02_E.image_scope.y = 0;
		level_02_E.image_scope.image = Textures.load
			("./Common/Textures/scope.png");
			
		level_02_E.red_screen_end = new Sprite();
		level_02_E.red_screen_end.width  = 1080;
		level_02_E.red_screen_end.height = 720;
		level_02_E.red_screen_end.alpha = 0;
		level_02_E.red_screen_end.image = Textures.load
			("./Common/Textures/red box.png");
		level_02_E.red_screen_end.update = function() {
			if(level_02_E.red_screen_end.alpha < 1) {
				level_02_E.red_screen_end.alpha += 0.007;
			}else {
				changeRoom(level_02_end);
			}
		}
		
		// Target E sprite
		level_02_E.image_target_E = new Sprite();
		level_02_E.image_target_E.width  = 48;
		level_02_E.image_target_E.height = 128;
		level_02_E.image_target_E.image  = Textures.load
			("./Common/Textures/Level 02/target-E.png");
		
		// Target E animation
		level_02_E.image_target_E.frameWidth  = 24;
		level_02_E.image_target_E.frameHeight = 64;
		level_02_E.image_target_E.frameCount  = 7;
		level_02_E.image_target_E.frameRate   = 0;
		level_02_E.image_target_E.addAnimations
			(["idle", "phone", "smoking"], [3,1,3]);
		level_02_E.image_target_E.update = function() {
			// Background sway
			level_02_E.image_target_E.x = level_02_E.image_background.x + 540;
			level_02_E.image_target_E.y = level_02_E.image_background.y + 280;
			// Animation
			if(level_02_hub.targetE_in_call == true) {
				level_02_E.image_target_E.animation = "phone";
				level_02_E.image_target_E.frameRate = 0;
			}else if((level_02_hub.target_loop.value>=600 && level_02_hub.target_loop.value<1080)	// 10 to 18 secs
					 || (level_02_hub.target_loop.value>=1800 && level_02_hub.target_loop.value<2280)	// 30 to 28 secs
					 || (level_02_hub.target_loop.value>=3000 && level_02_hub.target_loop.value<3480)) {	// 50 to 58 secs
				level_02_E.image_target_E.animation = "smoking";
				level_02_E.image_target_E.frameRate = .8;
			}else {
				level_02_E.image_target_E.animation = "idle";
				level_02_E.image_target_E.frameRate = .25;
			}
		};
		
		// Target C shadow sprite
		level_02_E.image_shadow_C = new Sprite();
		level_02_E.image_shadow_C.width  = 72;
		level_02_E.image_shadow_C.height = 96;
		level_02_E.image_shadow_C.image  = Textures.load
			("./Common/Textures/Level 02/target-C-shadow.png");
		level_02_E.image_shadow_C.update = function() {
			// Background sway
			level_02_E.image_shadow_C.x = level_02_E.image_background.x + 450;
			level_02_E.image_shadow_C.y = level_02_E.image_background.y + 220;
		};
		
		// Target D shadow sprite
		level_02_E.image_shadow_D = new Sprite();
		level_02_E.image_shadow_D.width  = 48;
		level_02_E.image_shadow_D.height = 96;
		level_02_E.image_shadow_D.image  = Textures.load
			("./Common/Textures/Level 02/target-D-shadow.png");
		level_02_E.image_shadow_D.update = function() {
			// Background sway
			level_02_E.image_shadow_D.x = level_02_E.image_background.x + 690;
			level_02_E.image_shadow_D.y = level_02_E.image_background.y + 305;
		};
		
		/***===   End of passive sprites  ===***/
		
		/***=================================***/
		/***         Active sprites          ***/
		/***=================================***/
		// Sprites to be available to input_manager

		// Button to return to the hub
		level_02_E.ret = new TextBox("<< return  ");
		level_02_E.ret.font = "Courier";
		level_02_E.ret.fontSize = 30;
		level_02_E.ret.color = "#FFFFFF";
		level_02_E.ret.x = 0;
		level_02_E.ret.y = 690;
		level_02_E.ret.mouseOver = false;
		level_02_E.ret.bgColor = "#000000";
		level_02_E.ret.update = function() {
			if(level_02_E.ret.mouseOver) {
				level_02_E.ret.color = "#484848";
			}else {
				level_02_E.ret.color = "#FFFFFF";
			}
		}
		level_02_E.ret.click = function() {
			level_02_hub.sound_background.volume = 0.5;
			level_02_E.stopAudio();
			changeRoom(level_02_hub);
		}
		
		// Button to initiate call target
		level_02_E.button_call = new TextBox("   <CALL PHONE>   ");
		level_02_E.button_call.font = "Courier";
		level_02_E.button_call.color = "Red";
		level_02_E.button_call.fontSize = 30;
		level_02_E.button_call.x = 375;
		level_02_E.button_call.y = 45;
		level_02_E.button_call.mouseOver = false;
		level_02_E.button_call.update = function() {
			if(level_02_E.button_call.mouseOver) {
				level_02_E.button_call.text = "<<< CALL PHONE >>>";
				level_02_E.button_call.color = "Lime";
			}else {
				level_02_E.button_call.text = "   <CALL PHONE>   ";
				level_02_E.button_call.color = "Red";
			}
		}
		level_02_E.button_call.click = function() {
			world.addChild(black_screen);
			level_02_E.startDialogue();
			level_02_hub.targetE_in_call = true;
		}
		
		// Button to fire upon target
		level_02_E.button_fire = new TextBox("<< FIRE >>");
		level_02_E.button_fire.font = "Courier";
		level_02_E.button_fire.fontSize = 35;
		level_02_E.button_fire.color = "Black";
		level_02_E.button_fire.x = 435;
		level_02_E.button_fire.y = 345;
		level_02_E.button_fire.visible = false;
		level_02_E.button_fire.update = function() {
			if(level_02_E.button_fire.mouseOver) {
				level_02_E.button_fire.visible = true;
				red_screen.visible = true;
			}else {
				level_02_E.button_fire.visible = false;
				red_screen.visible = false;
			}
		}
		level_02_E.button_fire.click = function() {
			level_02_E.stopAudio();
			world.removeChild(red_screen);
			world.removeChild(level_02_E.ret);
			world.removeChild(level_02_E.button_call);
			while(active_sprites.length > 0)
				active_sprites.pop();
			sound_ominous.play();
			world.addChild(level_02_E.red_screen_end);
		}

		world.addChild(level_02_E.image_background);
		world.addChild(level_02_E.image_target_E);
		world.addChild(level_02_E.image_shadow_C);
		world.addChild(level_02_E.image_shadow_D);
		world.addChild(red_screen);
		world.addChild(level_02_E.image_scope);
		world.addChild(level_02_E.ret);
		world.addChild(level_02_E.button_call);
		world.addChild(level_02_E.button_fire);
		world.addChild(level_02_hub.timer_text);
		
		// Nice animation
		level_02_E.top_border = new Sprite();
		level_02_E.top_border.width  = 1080;
		level_02_E.top_border.height = 720;
		level_02_E.top_border.x = 0;
		level_02_E.top_border.y = 0;
		level_02_E.top_border.image = Textures.load("./Common/Textures/black box.png");
		level_02_E.top_border.update = function() {
			level_02_E.top_border.y -= 30;
			if(level_02_E.top_border.y < -720)
				world.removeChild(level_02_E.top_border);
		}
		
		level_02_E.bottom_border = new Sprite();
		level_02_E.bottom_border.width  = 1080;
		level_02_E.bottom_border.height = 720;
		level_02_E.bottom_border.x = 0;
		level_02_E.bottom_border.y = 0;
		level_02_E.bottom_border.image = Textures.load("./Common/Textures/black box.png");
		level_02_E.bottom_border.update = function() {
			level_02_E.bottom_border.y += 30;
			if(level_02_E.bottom_border.y > 720)
				world.removeChild(level_02_E.bottom_border);
		}

		world.addChild(level_02_E.top_border);
		world.addChild(level_02_E.bottom_border);
		sound_zoom.play();	
		
		// Active sprites at creation time
		active_sprites.push(level_02_E.ret);
		active_sprites.push(level_02_E.button_call);
		active_sprites.push(level_02_E.button_fire);
		
		// Play this room's background audio if it isn't yet playing
		if(!level_02_E.bgm)
			level_02_E.playAudio();
	}
	
	/***==============================***/
	/***     room.startDialogue()     ***/
	/***==============================***/
	// Starting dialogue clears room behind the screen
	level_02_E.startDialogue = function() {
		world.removeChild(level_02_E.ret);
		world.removeChild(level_02_E.button_call);
		while(active_sprites.length > 0)
			active_sprites.pop();
		
		var node = createNode("Hello?", "Go to index 1", 1, "Go to ending 1", -1, "Go to ending 2", -2);
		createNode("You clicked index 1", "Go to ending 3", -3, "Go to ending 4", -4);
		node.create();
	}

	/***==============================***/
	/***       room.endDialogue()     ***/
	/***==============================***/
	// Ending the dialogue returns the room to the previous state
	// also updates whatever necessary dependaing on your ending
	level_02_E.endDialogue = function(ending) {
		world.removeChild(black_screen);
		
		world.addChild(level_02_E.ret);
		world.addChild(level_02_E.button_call);
		active_sprites.push(level_02_E.ret);
		active_sprites.push(level_02_E.button_call);
		active_sprites.push(level_02_E.button_fire);
		
		level_02_hub.targetE_in_call = false;
		alert("This is the ending you chose: " + ending);
	}
	
	/***===================================***/
	/***         room.playAudio()          ***/
	/***===================================***/
	// Play special audio for this room
	level_02_E.playAudio = function() {
 		// Audio objects for this room
 		level_02_E.sound_background = new Audio("./Common/Sounds/scope_ambiance01.wav");
		level_02_E.sound_background.volume = 0.5;
		
		
		// Play and loop room ambiance
		level_02_E.sound_background.addEventListener('ended', function() {
			this.currentTime = 0;
			this.play();
		});
		level_02_E.sound_background.play();
		
		level_02_E.bgm = true;
	}
	
	/***=================================***/
	/***         room.stopAudio()        ***/
	/***=================================***/
	// Stop all audio emitting from this room
	level_02_E.stopAudio = function() {
		// Stop city ambiance
		level_02_E.sound_background.pause();
		level_02_E.sound_background.currentTime = 0;
		level_02_E.sound_background.removeEventListener('ended', function() {
			this.pause();
			this.currentTime = 0;
		});
		
		level_02_E.bgm = false;
	}
	
	/***===============================***/
	/***        Clear this room        ***/
	/***===============================***/
	// Remove from the world, un-draw sprites, etc...
	level_02_E.clear = function() {
		world.removeChild(level_02_E.image_background);
		world.removeChild(level_02_E.image_target_E);
		world.removeChild(level_02_E.image_shadow_C);
		world.removeChild(level_02_E.image_shadow_D);
		world.removeChild(level_02_E.image_scope);
		world.removeChild(level_02_E.ret);
		world.removeChild(level_02_E.button_call);
		world.removeChild(level_02_E.button_fire);
		world.removeChild(level_02_E.red_screen_end);
		world.removeChild(level_02_hub.timer_text);
		world.removeChild(red_screen);
		while(active_sprites.length > 0)
			active_sprites.pop();
	}