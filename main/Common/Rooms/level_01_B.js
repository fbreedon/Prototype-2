/***===============================***/
/***       Level 01: target B      ***/
/***===============================***/
var level_01_B = new Sprite();
	// Is the BGM playing?
	level_01_B.bgm = false;

	// Create this room
	level_01_B.create = function() {
		var info_count = 0;
		
		var sway_x = 0;
		var sway_y = 0;
		
		// This room's passive sprites
		level_01_B.image_background = new Sprite();
		level_01_B.image_background.width  = 1080;
		level_01_B.image_background.height = 720;
		level_01_B.image_background.x = 0;
		level_01_B.image_background.y = 0;
		level_01_B.image_background.image = Textures.load
			("./Common/Textures/Level 01/target B background.png");
		level_01_B.image_background.i = 0;
		level_01_B.image_background.update = function() {
			level_01_B.image_background.y = Math.sin(sway_x) * 20;
			sway_x += 0.009 * Math.random();
			level_01_B.image_background.x = Math.sin(sway_y) * 20;
			sway_y += 0.02 * Math.random();;
			if(sway_x >= 2*Math.PI) sway_x = 0;
			if(sway_y >= 2*Math.PI) sway_y = 0;
		}
			
		level_01_B.image_scope = new Sprite();
		level_01_B.image_scope.width  = 1080;
		level_01_B.image_scope.height = 720;
		level_01_B.image_scope.x = 0;
		level_01_B.image_scope.y = 0;
		level_01_B.image_scope.image = Textures.load
			("./Common/Textures/scope.png");
			
		level_01_B.red_screen_end = new Sprite();
		level_01_B.red_screen_end.width  = 1080;
		level_01_B.red_screen_end.height = 720;
		level_01_B.red_screen_end.alpha = 0;
		level_01_B.red_screen_end.image = Textures.load
			("./Common/Textures/red box.png");
		level_01_B.red_screen_end.update = function() {
			if(level_01_B.red_screen_end.alpha < 1) {
				level_01_B.red_screen_end.alpha += 0.007;
			}else {
				changeRoom(level_01_end);
			}
		}
				
		// Car Sprite
		level_01_B.image_car = new Sprite();
		level_01_B.image_car.width  = 220;
		level_01_B.image_car.height = 137.5;
		level_01_B.image_car.image = Textures.load
			("./Common/Textures/general-car-parked.png");
		level_01_B.image_car.update = function() {
			// Background sway
			level_01_B.image_car.x = level_01_B.image_background.x + 370;
			level_01_B.image_car.y = level_01_B.image_background.y + 340;
		};
			
		// Target B Sprite
		level_01_B.image_target_B = new Sprite();
		level_01_B.image_target_B.width  = 36;
		level_01_B.image_target_B.height = 96;
		level_01_B.image_target_B.x = 0;
		level_01_B.image_target_B.y = 0;
		level_01_B.image_target_B.image = Textures.load
			("./Common/Textures/Level 01/target-B.png");
		// Target B Animation
		level_01_B.image_target_B.frameWidth  = 24;
		level_01_B.image_target_B.frameHeight = 64;
		level_01_B.image_target_B.frameCount  = 3;
		level_01_B.image_target_B.frameRate   = 0;
		level_01_B.image_target_B.addAnimations
			(["idle", "check_watch", "look_around"], [1,1,1]);
		level_01_B.image_target_B.update = function() {
			// Background sway
			level_01_B.image_target_B.x = level_01_B.image_background.x + 520;
			level_01_B.image_target_B.y = level_01_B.image_background.y + 360;
			// Animations
			if((level_01_hub.target_loop.value>=180 && level_01_hub.target_loop.value<360)	// 3 to 6 secs
				|| (level_01_hub.target_loop.value>=1380 && level_01_hub.target_loop.value<1560)	// 23 to 26 secs
				|| (level_01_hub.target_loop.value>=2580 && level_01_hub.target_loop.value<2760)) {	// 43 to 46 secs
				info_count++;
				if(level_01_hub.targetB_has_seen && info_count == 120){
						level_01_hub.seen_info = "some info";
						level_01_hub.targetB_has_seen = true;
				}
			}else if((level_01_hub.target_loop.value>=360 && level_01_hub.target_loop.value<540)	// 6 to 9 secs
				|| (level_01_hub.target_loop.value>=1560 && level_01_hub.target_loop.value<1740)	// 26 to 29 secs
				|| (level_01_hub.target_loop.value>=2760 && level_01_hub.target_loop.value<2940)) {	// 46 to 49 secs
				level_01_B.image_target_B.animation = "look_around";
				level_01_B.image_target_B.frameRate = 0;
				info_count++;
				if(level_01_hub.targetB_has_seen && info_count == 120){
						level_01_hub.targetB_seen_info = "some info";
						level_01_hub.targetB_has_seen = true;
				}
				level_01_B.image_target_B.animation = "idle";
				level_01_B.image_target_B.frameRate = 0;
			}
		};

		// This room's active sprites
		level_01_B.ret = new TextBox("<< return  ");
		level_01_B.ret.font = "Courier";
		level_01_B.ret.fontSize = 30;
		level_01_B.ret.color = "#FFFFFF";
		level_01_B.ret.x = 0;
		level_01_B.ret.y = 690;
		level_01_B.ret.mouseOver = false;
		level_01_B.ret.bgColor = "#000000";
		level_01_B.ret.drawBG = true;
		level_01_B.ret.update = function() {
			if(level_01_B.ret.mouseOver) {
				level_01_B.ret.color = "#484848";
			}else {
				level_01_B.ret.color = "#FFFFFF";
			}
		}
		level_01_B.ret.click = function() {
			level_01_B.stopAudio();
			level_01_hub.sound_background.volume = 0.5;
			changeRoom(level_01_hub);
		}
		
		level_01_B.button_call = new TextBox("   <CALL PHONE>   ");
		level_01_B.button_call.font = "Courier";
		level_01_B.button_call.color = "Red";
		level_01_B.button_call.fontSize = 30;
		level_01_B.button_call.x = 375;
		level_01_B.button_call.y = 45;
		level_01_B.button_call.mouseOver = false;
		level_01_B.button_call.update = function() {
			if(level_01_B.button_call.mouseOver) {
				level_01_B.button_call.text = "<<< CALL PHONE >>>";
				level_01_B.button_call.color = "Lime";
			}else {
				level_01_B.button_call.text = "   <CALL PHONE>   ";
				level_01_B.button_call.color = "Red";
			}
		}
		level_01_B.button_call.click = function() {
			world.addChild(black_screen);
			level_01_B.startDialogue();
		}
		
		level_01_B.button_fire = new TextBox("<< FIRE >>");
		level_01_B.button_fire.font = "Courier";
		level_01_B.button_fire.fontSize = 35;
		level_01_B.button_fire.color = "Black";
		level_01_B.button_fire.x = 435;
		level_01_B.button_fire.y = 345;
		level_01_B.button_fire.visible = false;
		level_01_B.button_fire.can_click = true;
		level_01_B.button_fire.update = function() {
			if(level_01_B.button_fire.mouseOver) {
				level_01_B.button_fire.visible = true;
				red_screen.visible = true;
			}else {
				level_01_B.button_fire.visible = false;
				red_screen.visible = false;
			}
		}
		level_01_B.button_fire.click = function() {
			if(level_01_B.button_fire.can_click) {
				level_01_B.stopAudio();
				world.removeChild(level_01_hub.level_timer);
				world.removeChild(level_01_hub.target_loop);
				world.removeChild(level_01_hub.timer_text);
				world.removeChild(red_screen);
				level_01_hub.ending_state = 2;
				sound_ominous.play();
				world.addChild(level_01_B.red_screen_end);
				world.removeChild(level_01_B.button_call);
				world.removeChild(level_01_B.ret);
				while(active_sprites.length > 0 ) 
					active_sprites.pop();
				level_01_B.button_fire.can_click = false;
			}
		}
		/***===    End of active sprites   ===***/
		
		/***====================================***/
		/***          Room audio                ***/
		/***====================================***/
		level_01_B.sound_ominous = new Audio("./Common/Sounds/ominous.wav");
		level_01_B.sound_ominous.volume = 0.7;
		
		// Visible sprites at creation time
		world.addChild(level_01_B.image_background);
		world.addChild(level_01_B.image_car);
		world.addChild(level_01_B.image_target_B);
		world.addChild(red_screen);
		world.addChild(level_01_B.image_scope);
		world.addChild(level_01_B.ret);
		if(level_01_hub.targetB_cancall)
			world.addChild(level_01_B.button_call);
		world.addChild(level_01_B.button_fire);
		world.addChild(level_01_hub.timer_text);
		
		// Nice animation
		level_01_B.top_border = new Sprite();
		level_01_B.top_border.width  = 1080;
		level_01_B.top_border.height = 720;
		level_01_B.top_border.x = 0;
		level_01_B.top_border.y = 0;
		level_01_B.top_border.image = Textures.load("./Common/Textures/black box.png");
		level_01_B.top_border.update = function() {
			level_01_B.top_border.y -= 30;
			if(level_01_B.top_border.y < -720)
				world.removeChild(level_01_B.top_border);
		}
		
		level_01_B.bottom_border = new Sprite();
		level_01_B.bottom_border.width  = 1080;
		level_01_B.bottom_border.height = 720;
		level_01_B.bottom_border.x = 0;
		level_01_B.bottom_border.y = 0;
		level_01_B.bottom_border.image = Textures.load("./Common/Textures/black box.png");
		level_01_B.bottom_border.update = function() {
			level_01_B.bottom_border.y += 30;
			if(level_01_B.bottom_border.y > 720)
				world.removeChild(level_01_B.bottom_border);
		}
		
		world.addChild(level_01_B.top_border);
		world.addChild(level_01_B.bottom_border);
		sound_zoom.play();
		
		// Active sprites at creation time
		active_sprites.push(level_01_B.ret);
		if(level_01_hub.targetB_cancall)
			active_sprites.push(level_01_B.button_call);
		active_sprites.push(level_01_B.button_fire);
		
		// Play this room's audio if it isn't yet playing
		if(!level_01_B.bgm)
			level_01_B.playAudio();
	}
	
	// Start the dialogue
	level_01_B.startDialogue = function() {
		world.removeChild(level_01_B.ret);
		world.removeChild(level_01_B.button_call);
		while(active_sprites.length > 0)
			active_sprites.pop();
		
		var node = createNode("The number you have reached is currently unavailable, \nplease hang up and try again.", 
			"\n\n\n\n\n\n\-End call", -1);
		node.create();
	}
		
	// End the dialogue
	level_01_B.endDialogue = function(ending) {
		while(nodes.length > 0)
			nodes.pop();
		level_01_hub.targetB_cancall = false;
		world.removeChild(black_screen);
		
		world.addChild(level_01_B.ret);
		active_sprites.push(level_01_B.button_fire);
		active_sprites.push(level_01_B.ret);
		
		var image_wrote_note = new TextBox("\"I wrote a note...\"");
		image_wrote_note.font = "Courier";
		image_wrote_note.fontSize = 30;
		image_wrote_note.color = "White";
		image_wrote_note.x = 360;
		image_wrote_note.y = 650;
		image_wrote_note.update = function() {
			image_wrote_note.alpha -= 0.01;
			if(image_wrote_note.alpha == 0)
				world.removeChild(image_wrote_note);
		}
		world.addChild(image_wrote_note);
		sound_write.play();
		level_01_hub.targetB_has_called = true;
		level_01_hub.targetB_ending_info = "Target B: His phone seems to be off";
		clear_array();
	}
	
	/***===================================***/
	/***         room.playAudio()          ***/
	/***===================================***/
	// Play special audio for this room
	level_01_B.playAudio = function() {
 		// Audio objects for this room
 		level_01_B.sound_background = new Audio("./Common/Sounds/scope_ambiance01.wav");
		level_01_B.sound_background.volume = 0.5;
		
		
		// Play and loop room ambiance
		level_01_B.sound_background.addEventListener('ended', function() {
			this.currentTime = 0;
			this.play();
		});
		level_01_B.sound_background.play();
		
		level_01_B.bgm = true;
	}
	
	/***=================================***/
	/***         room.stopAudio()        ***/
	/***=================================***/
	// Stop all audio emitting from this room
	level_01_B.stopAudio = function() {
		// Stop city ambiance
		level_01_B.sound_background.pause();
		level_01_B.sound_background.currentTime = 0;
		level_01_B.sound_background.removeEventListener('ended', function() {
			this.pause();
			this.currentTime = 0;
		});
		
		level_01_B.bgm = false;
	}
	
	// Clear this room
	level_01_B.clear = function() {
		world.removeChild(level_01_B.image_background);
		world.removeChild(level_01_B.image_car);
		world.removeChild(level_01_B.image_target_B);
		world.removeChild(level_01_B.image_scope);
		world.removeChild(level_01_B.ret);
		world.removeChild(level_01_B.button_call);
		world.removeChild(level_01_B.button_fire);
		world.removeChild(level_01_B.red_screen_end);
		world.removeChild(level_01_hub.timer_text);
		world.removeChild(red_screen);
		while(active_sprites.length > 0)
			active_sprites.pop();
	}