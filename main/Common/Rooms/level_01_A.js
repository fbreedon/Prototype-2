/***===============================***/
/***       Level 01: target A      ***/
/***===============================***/
var level_01_A = new Sprite();
	// Is the BGM playing?
	level_01_A.bgm = false;

	/***==================================***/
	/***          room.create()           ***/
	/***==================================***/
	// What to do at creation time
	level_01_A.create = function() {
		var info_count = 0;
		
		var sway_x = 0;
		var sway_y = 0;
		
		/***=================================***/
		/***         Passive sprites         ***/
		/***=================================***/
		// Sprites to be drawn, but without interactivity
		level_01_A.image_background = new Sprite();
		level_01_A.image_background.width  = 1080;
		level_01_A.image_background.height = 720;
		level_01_A.image_background.x = 0;
		level_01_A.image_background.y = 0;
		level_01_A.image_background.image = Textures.load
			("./Common/Textures/Level 01/target A background.png");
		level_01_A.image_background.i = 0;
		level_01_A.image_background.update = function() {
			level_01_A.image_background.y = Math.sin(sway_x) * 20;
			sway_x += 0.009 * Math.random();
			level_01_A.image_background.x = Math.sin(sway_y) * 20;
			sway_y += 0.02 * Math.random();;
			if(sway_x >= 2*Math.PI) sway_x = 0;
			if(sway_y >= 2*Math.PI) sway_y = 0;
		}
			
		level_01_A.image_scope = new Sprite();
		level_01_A.image_scope.width  = 1080;
		level_01_A.image_scope.height = 720;
		level_01_A.image_scope.x = 0;
		level_01_A.image_scope.y = 0;
		level_01_A.image_scope.image = Textures.load
			("./Common/Textures/scope.png");
		
		// Target A sprite
		level_01_A.image_target_A = new Sprite();
		level_01_A.image_target_A.width  = 32;
		level_01_A.image_target_A.height = 64;
		level_01_A.image_target_A.x = 0;
		level_01_A.image_target_A.y = 0;
		level_01_A.image_target_A.image = Textures.load
			("./Common/Textures/Level 01/target-A.png");
			
		// Target A animation
		level_01_A.image_target_A.frameWidth   = 32;
		level_01_A.image_target_A.frameHeight  = 64;
		level_01_A.image_target_A.frameCount   = 5;
		level_01_A.image_target_A.frameRate    = 0;
		level_01_A.image_target_A.addAnimations(["idle", "check_phone"], [1,3]);
		level_01_A.image_target_A.addAnimation("phone_out",2,1);
		level_01_A.image_target_A.addAnimation("phone_away",3,1);
		level_01_A.image_target_A.update = function() {
			// Background sway
			level_01_A.image_target_A.x = level_01_A.image_background.x + 520;
			level_01_A.image_target_A.y = level_01_A.image_background.y + 340;
			// Animations
			if(level_01_hub.target_loop.value>=600 && level_01_hub.target_loop.value<660) {
				level_01_A.image_target_A.animation = "check_phone";
				level_01_A.image_target_A.frameRate = 2;
			}else if(level_01_hub.target_loop.value>=660 && level_01_hub.target_loop.value<780) {
				level_01_A.image_target_A.animation = "phone_out";
				level_01_A.image_target_A.frameRate = 0;
				info_count++;
				if(!level_01_A.target1_has_seen && info_count == 60) {
					level_01_A.target1_seen_info = "some info";
					level_01_A.target1_has_seen = true;
				}
			}else if(level_01_hub.target_loop.value>=780 && level_01_hub.target_loop.value<810) {
				level_01_A.image_target_A.animation = "phone_away";
				level_01_A.image_target_A.frameRate = 0;
			}else {
				level_01_A.image_target_A.animation = "idle";
				level_01_A.image_target_A.frameRate = 0;
			}
		};
		
		/***===   End of passive sprites  ===***/
		
		/***=================================***/
		/***         Active sprites          ***/
		/***=================================***/
		// Sprites to be available to input_manager

		// Button to return to the hub
		level_01_A.ret = new TextBox("<< return  ");
		level_01_A.ret.font = "Courier";
		level_01_A.ret.fontSize = 30;
		level_01_A.ret.color = "#FFFFFF";
		level_01_A.ret.x = 0;
		level_01_A.ret.y = 690;
		level_01_A.ret.mouseOver = false;
		level_01_A.ret.bgColor = "#000000";
		level_01_A.ret.update = function() {
			if(level_01_A.ret.mouseOver) {
				level_01_A.ret.color = "#484848";
			}else {
				level_01_A.ret.color = "#FFFFFF";
			}
		}
		level_01_A.ret.click = function() {
			level_01_hub.sound_background.volume = 0.5;
			level_01_A.stopAudio();
			changeRoom(level_01_hub);
		}
		
		// Button to initiate call target
		level_01_A.button_call = new TextBox("   <CALL PHONE>   ");
		level_01_A.button_call.font = "Courier";
		level_01_A.button_call.color = "Red";
		level_01_A.button_call.fontSize = 30;
		level_01_A.button_call.x = 375;
		level_01_A.button_call.y = 45;
		level_01_A.button_call.mouseOver = false;
		level_01_A.button_call.update = function() {
			if(level_01_A.button_call.mouseOver) {
				level_01_A.button_call.text = "<<< CALL PHONE >>>";
				level_01_A.button_call.color = "Lime";
			}else {
				level_01_A.button_call.text = "   <CALL PHONE>   ";
				level_01_A.button_call.color = "Red";
			}
		}
		level_01_A.button_call.click = function() {
			world.addChild(black_screen);
			room_manager.curr_room.startDialogue();
		}
		
		// Button to fire upon target
		level_01_A.button_fire = new TextBox("<< FIRE >>");
		level_01_A.button_fire.font = "Courier";
		level_01_A.button_fire.fontSize = 35;
		level_01_A.button_fire.color = "Black";
		level_01_A.button_fire.x = 435;
		level_01_A.button_fire.y = 345;
		level_01_A.button_fire.visible = false;
		level_01_A.button_fire.update = function() {
			if(level_01_A.button_fire.mouseOver) {
				level_01_A.button_fire.visible = true;
				red_screen.visible = true;
			}else {
				level_01_A.button_fire.visible = false;
				red_screen.visible = false;
			}
		}
		level_01_A.button_fire.click = function() {
			level_01_A.stopAudio();
			world.removeChild(red_screen);
			changeRoom(level_01_end);
		}
		

		world.addChild(level_01_A.image_background);
		world.addChild(level_01_A.image_target_A);
		world.addChild(red_screen);
		world.addChild(level_01_A.image_scope);
		world.addChild(level_01_A.ret);
		world.addChild(level_01_A.button_call);
		world.addChild(level_01_A.button_fire);
		
		// Active sprites at creation time
		active_sprites.push(level_01_A.ret);
		active_sprites.push(level_01_A.button_call);
		active_sprites.push(level_01_A.button_fire);
		
		// Play this room's background audio if it isn't yet playing
		if(!level_01_A.bgm)
			level_01_A.playAudio();
	}
	
	/***==============================***/
	/***     room.startDialogue()     ***/
	/***==============================***/
	// Starting dialogue clears room behind the screen
	level_01_A.startDialogue = function() {
		world.removeChild(level_01_A.ret);
		world.removeChild(level_01_A.button_call);
		while(active_sprites.length > 0)
			active_sprites.pop();
		
		var node = createNode  // Index: 0
			("H-Hello?", 
			 "Expecting someone?", 1, 
			 "I'm running a little late", 2,
			 "Shit's gone down, I need you to \nstay right where you are", 3);
		node.create();
		
		createNode     // Index: 1
			("What? N-no, I'm just... \nwho are you again?",
			 "Who I am is of no importance, \nthe question is who are you?", 5,
			 "I am a friend. I am aware of the \nsituation you are in.", 6);
	}

	/***==============================***/
	/***       room.endDialogue()     ***/
	/***==============================***/
	// Ending the dialogue returns the room to the previous state
	// also updates whatever necessary dependaing on your ending
	level_01_A.endDialogue = function(ending) {
		world.removeChild(black_screen);
		
		world.addChild(level_01_A.ret);
		world.addChild(level_01_A.button_call);
		active_sprites.push(level_01_A.ret);
		active_sprites.push(level_01_A.button_call);
		active_sprites.push(level_01_A.button_fire);
		
		alert("This is the ending you chose: " + ending);
	}
	
	/***===================================***/
	/***         room.playAudio()          ***/
	/***===================================***/
	// Play special audio for this room
	level_01_A.playAudio = function() {
 		// Audio objects for this room
 		level_01_A.sound_background = new Audio("./Common/Sounds/scope_ambiance01.wav");
		level_01_A.sound_background.volume = 0.5;
		
		
		// Play and loop room ambiance
		level_01_A.sound_background.addEventListener('ended', function() {
			this.currentTime = 0;
			this.play();
		});
		level_01_A.sound_background.play();
		
		level_01_A.bgm = true;
	}
	
	/***=================================***/
	/***         room.stopAudio()        ***/
	/***=================================***/
	// Stop all audio emitting from this room
	level_01_A.stopAudio = function() {
		// Stop city ambiance
		level_01_A.sound_background.pause();
		level_01_A.sound_background.currentTime = 0;
		level_01_A.sound_background.removeEventListener('ended', function() {
			this.pause();
			this.currentTime = 0;
		});
		
		level_01_A.bgm = false;
	}
	
	/***===============================***/
	/***        Clear this room        ***/
	/***===============================***/
	// Remove from the world, un-draw sprites, etc...
	level_01_A.clear = function() {
		world.removeChild(level_01_A.image_background);
		world.removeChild(level_01_A.image_target_A);
		world.removeChild(level_01_A.image_scope);
		world.removeChild(level_01_A.ret);
		world.removeChild(level_01_A.button_call);
		world.removeChild(level_01_A.button_fire);
		world.removeChild(red_screen);
		while(active_sprites.length > 0)
			active_sprites.pop();
	}