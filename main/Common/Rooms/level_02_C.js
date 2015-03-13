/***===============================***/
/***       Level 01: target A      ***/
/***===============================***/
var level_02_C = new Sprite();
	// Is the BGM playing?
	level_02_C.bgm = false;

	/***==================================***/
	/***          room.create()           ***/
	/***==================================***/
	// What to do at creation time
	level_02_C.create = function() {
		var sway_x = 0;
		var sway_y = 0;
		
		/***=================================***/
		/***         Passive sprites         ***/
		/***=================================***/
		// Sprites to be drawn, but without interactivity
		level_02_C.image_background = new Sprite();
		level_02_C.image_background.width  = 1080;
		level_02_C.image_background.height = 720;
		level_02_C.image_background.x = 0;
		level_02_C.image_background.y = 0;
		level_02_C.image_background.image = Textures.load
			("./Common/Textures/Level 02/target C background.png");
		level_02_C.image_background.i = 0;
		level_02_C.image_background.update = function() {
			level_02_C.image_background.y = Math.sin(sway_x) * 20;
			sway_x += 0.009 * Math.random();
			level_02_C.image_background.x = Math.sin(sway_y) * 20;
			sway_y += 0.02 * Math.random();;
			if(sway_x >= 2*Math.PI) sway_x = 0;
			if(sway_y >= 2*Math.PI) sway_y = 0;
		}
			
		level_02_C.image_scope = new Sprite();
		level_02_C.image_scope.width  = 1080;
		level_02_C.image_scope.height = 720;
		level_02_C.image_scope.x = 0;
		level_02_C.image_scope.y = 0;
		level_02_C.image_scope.image = Textures.load
			("./Common/Textures/scope.png");
		
		// Target C sprite
		level_02_C.image_target_C = new Sprite();
		level_02_C.image_target_C.width  = 72;
		level_02_C.image_target_C.height = 96;
		level_02_C.image_target_C.image  = Textures.load
			("./Common/Textures/Level 02/target-C.png");
		
		// Target C animation
		level_02_C.image_target_C.frameWidth  = 48;
		level_02_C.image_target_C.frameHeight = 64;
		level_02_C.image_target_C.frameCount  = 5;
		level_02_C.image_target_C.frameRate   = 0;
		level_02_C.image_target_C.addAnimation("idle",0,1);
		level_02_C.image_target_C.addAnimation("drink",1,1);
		level_02_C.image_target_C.addAnimation("sleep",2,1);
		level_02_C.image_target_C.addAnimation("phone",3,1);
		level_02_C.image_target_C.update = function() {
			// Background sway
			level_02_C.image_target_C.x = level_02_C.image_background.x + 480;
			level_02_C.image_target_C.y = level_02_C.image_background.y + 340;
			// Animation
			if(level_02_hub.targetC_in_call == true) {
				level_02_C.image_target_C.animation = "phone";
			}else if((level_02_hub.target_loop.value>=300 && level_02_hub.target_loop.value<480)	// 5 to 8 secs
					 || (level_02_hub.target_loop.value>=2100 && level_02_hub.target_loop.value<2280)) {	// 35 to 38 secs
				level_02_C.image_target_C.animation = "drink";
			}else if((level_02_hub.target_loop.value>=900 && level_02_hub.target_loop.value<1380)	// 15 to 23 secs
					 || (level_02_hub.target_loop.value>=2700 && level_02_hub.target_loop.value<3180)) {	// 45 to 53 secs
				level_02_C.image_target_C.animation = "sleep";
			}else {
				level_02_C.image_target_C.animation = "idle";
			}
		};
		
		// Target D shadow sprite
		level_02_C.image_shadow_D = new Sprite();
		level_02_C.image_shadow_D.width  = 48;
		level_02_C.image_shadow_D.height = 96;
		level_02_C.image_shadow_D.image  = Textures.load
			("./Common/Textures/Level 02/target-D-shadow.png");
		level_02_C.image_shadow_D.update = function() {
			// Background sway
			level_02_C.image_shadow_D.x = level_02_C.image_background.x + 720;
			level_02_C.image_shadow_D.y = level_02_C.image_background.y + 420;
		};
		
		// Target E shadow sprite
		level_02_C.image_shadow_E = new Sprite();
		level_02_C.image_shadow_E.width  = 48;
		level_02_C.image_shadow_E.height = 128;
		level_02_C.image_shadow_E.image  = Textures.load
			("./Common/Textures/general-man-plain.png");
		level_02_C.image_shadow_E.update = function() {
			// Background sway
			level_02_C.image_shadow_E.x = level_02_C.image_background.x + 570;
			level_02_C.image_shadow_E.y = level_02_C.image_background.y + 400;
			// Animation
			level_02_C.image_shadow_E.frameWidth  = 24;
			level_02_C.image_shadow_E.frameHeight = 64;
			level_02_C.image_shadow_E.frameCount  = 25;
			level_02_C.image_shadow_E.frameRate = 0;
			level_02_C.image_shadow_E.addAnimation("stand_RU",23,1);
			level_02_C.image_shadow_E.animation = "stand_RU";
		};
		
		/***===   End of passive sprites  ===***/
		
		/***=================================***/
		/***         Active sprites          ***/
		/***=================================***/
		// Sprites to be available to input_manager

		// Button to return to the hub
		level_02_C.ret = new TextBox("<< return  ");
		level_02_C.ret.font = "Courier";
		level_02_C.ret.fontSize = 30;
		level_02_C.ret.color = "#FFFFFF";
		level_02_C.ret.x = 0;
		level_02_C.ret.y = 690;
		level_02_C.ret.mouseOver = false;
		level_02_C.ret.bgColor = "#000000";
		level_02_C.ret.update = function() {
			if(level_02_C.ret.mouseOver) {
				level_02_C.ret.color = "#484848";
			}else {
				level_02_C.ret.color = "#FFFFFF";
			}
		}
		level_02_C.ret.click = function() {
			level_02_hub.sound_background.volume = 0.5;
			level_02_C.stopAudio();
			changeRoom(level_02_hub);
		}
		
		// Button to initiate call target
		level_02_C.button_call = new TextBox("   <CALL PHONE>   ");
		level_02_C.button_call.font = "Courier";
		level_02_C.button_call.color = "Red";
		level_02_C.button_call.fontSize = 30;
		level_02_C.button_call.x = 375;
		level_02_C.button_call.y = 45;
		level_02_C.button_call.mouseOver = false;
		level_02_C.button_call.update = function() {
			if(level_02_C.button_call.mouseOver) {
				level_02_C.button_call.text = "<<< CALL PHONE >>>";
				level_02_C.button_call.color = "Lime";
			}else {
				level_02_C.button_call.text = "   <CALL PHONE>   ";
				level_02_C.button_call.color = "Red";
			}
		}
		level_02_C.button_call.click = function() {
			world.addChild(black_screen);
			level_02_C.startDialogue(0);
			level_02_hub.targetC_in_call = true;
		}
		
		// Button to fire upon target
		level_02_C.button_fire = new TextBox("<< FIRE >>");
		level_02_C.button_fire.font = "Courier";
		level_02_C.button_fire.fontSize = 35;
		level_02_C.button_fire.color = "Black";
		level_02_C.button_fire.x = 435;
		level_02_C.button_fire.y = 345;
		level_02_C.button_fire.visible = false;
		level_02_C.button_fire.update = function() {
			if(level_02_C.button_fire.mouseOver) {
				level_02_C.button_fire.visible = true;
				red_screen.visible = true;
			}else {
				level_02_C.button_fire.visible = false;
				red_screen.visible = false;
			}
		}
		level_02_C.button_fire.click = function() {
			level_02_C.stopAudio();
			world.removeChild(red_screen);
			changeRoom(level_02_end);
		}
		

		world.addChild(level_02_C.image_background);
		world.addChild(level_02_C.image_target_C);
		world.addChild(level_02_C.image_shadow_D);
		world.addChild(level_02_C.image_shadow_E);
		world.addChild(red_screen);
		world.addChild(level_02_C.image_scope);
		world.addChild(level_02_C.ret);
		world.addChild(level_02_C.button_call);
		world.addChild(level_02_C.button_fire);
		world.addChild(level_02_hub.timer_text);
		
		// Active sprites at creation time
		active_sprites.push(level_02_C.ret);
		active_sprites.push(level_02_C.button_call);
		active_sprites.push(level_02_C.button_fire);
		
		// Play this room's background audio if it isn't yet playing
		if(!level_02_C.bgm)
			level_02_C.playAudio();
	}
	
	/***==============================***/
	/***     room.startDialogue()     ***/
	/***==============================***/
	// Starting dialogue clears room behind the screen
	level_02_C.startDialogue = function() {
		world.removeChild(level_02_C.ret);
		world.removeChild(level_02_C.button_call);
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
	level_02_C.endDialogue = function(ending) {
		world.removeChild(black_screen);
		
		world.addChild(level_02_C.ret);
		world.addChild(level_02_C.button_call);
		active_sprites.push(level_02_C.ret);
		active_sprites.push(level_02_C.button_call);
		active_sprites.push(level_02_C.button_fire);
		
		level_02_hub.targetC_in_call = false;
		alert("This is the ending you chose: " + ending);
	}
	
	/***===================================***/
	/***         room.playAudio()          ***/
	/***===================================***/
	// Play special audio for this room
	level_02_C.playAudio = function() {
 		// Audio objects for this room
 		level_02_C.sound_background = new Audio("./Common/Sounds/scope_ambiance01.wav");
		level_02_C.sound_background.volume = 0.5;
		
		
		// Play and loop room ambiance
		level_02_C.sound_background.addEventListener('ended', function() {
			this.currentTime = 0;
			this.play();
		});
		level_02_C.sound_background.play();
		
		level_02_C.bgm = true;
	}
	
	/***=================================***/
	/***         room.stopAudio()        ***/
	/***=================================***/
	// Stop all audio emitting from this room
	level_02_C.stopAudio = function() {
		// Stop city ambiance
		level_02_C.sound_background.pause();
		level_02_C.sound_background.currentTime = 0;
		level_02_C.sound_background.removeEventListener('ended', function() {
			this.pause();
			this.currentTime = 0;
		});
		
		level_02_C.bgm = false;
	}
	
	/***===============================***/
	/***        Clear this room        ***/
	/***===============================***/
	// Remove from the world, un-draw sprites, etc...
	level_02_C.clear = function() {
		world.removeChild(level_02_C.image_background);
		world.removeChild(level_02_C.image_target_C);
		world.removeChild(level_02_C.image_shadow_D);
		world.removeChild(level_02_C.image_shadow_E);
		world.removeChild(level_02_C.image_scope);
		world.removeChild(level_02_C.ret);
		world.removeChild(level_02_C.button_call);
		world.removeChild(level_02_C.button_fire);
		world.removeChild(level_02_hub.timer_text);
		world.removeChild(red_screen);
		while(active_sprites.length > 0)
			active_sprites.pop();
	}