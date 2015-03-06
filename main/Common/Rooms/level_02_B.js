/***===============================***/
/***       Level 01: target A      ***/
/***===============================***/
var level_02_B = new Sprite();

	/***==================================***/
	/***          room.create()           ***/
	/***==================================***/
	// What to do at creation time
	level_02_B.create = function() {
		var sway_x = 0;
		var sway_y = 0;
		
		/***=================================***/
		/***         Passive sprites         ***/
		/***=================================***/
		// Sprites to be drawn, but without interactivity
		level_02_B.image_background = new Sprite();
		level_02_B.image_background.width  = 1080;
		level_02_B.image_background.height = 720;
		level_02_B.image_background.x = 0;
		level_02_B.image_background.y = 0;
		level_02_B.image_background.image = Textures.load
			("./Common/Textures/Level 02/target B background.png");
		level_02_B.image_background.i = 0;
		level_02_B.image_background.update = function() {
			level_02_B.image_background.y = Math.sin(sway_x) * 20;
			sway_x += 0.009 * Math.random();
			level_02_B.image_background.x = Math.sin(sway_y) * 20;
			sway_y += 0.02 * Math.random();;
			if(sway_x >= 2*Math.PI) sway_x = 0;
			if(sway_y >= 2*Math.PI) sway_y = 0;
		}
			
		level_02_B.image_scope = new Sprite();
		level_02_B.image_scope.width  = 1080;
		level_02_B.image_scope.height = 720;
		level_02_B.image_scope.x = 0;
		level_02_B.image_scope.y = 0;
		level_02_B.image_scope.image = Textures.load
			("./Common/Textures/scope.png");
		
		level_02_B.image_ak47 = new Sprite();
		level_02_B.image_ak47.width  = 32;
		level_02_B.image_ak47.height = 64;
		level_02_B.image_ak47.image = Textures.load
			("./Common/Textures/general-ak47.png");
		level_02_B.image_ak47.update = function() {
			// Background sway
			level_02_B.image_ak47.x = level_02_B.image_background.x + 500;
			level_02_B.image_ak47.y = level_02_B.image_background.y + 380;
		};
		
		// Target B sprite
		level_02_B.image_target_B = new Sprite();
		level_02_B.image_target_B.width  = 48;
		level_02_B.image_target_B.height = 128;
		level_02_B.image_target_B.image = Textures.load
			("./Common/Textures/Level 02/target-B.png");
		
		// Target B animation
		level_02_B.image_target_B.frameWidth  = 24;
		level_02_B.image_target_B.frameHeight = 64;
		level_02_B.image_target_B.frameCount  = 4;
		level_02_B.image_target_B.frameRate   = 0;
		level_02_B.image_target_B.addAnimation("idle",0,1);
		level_02_B.image_target_B.addAnimation("watch",1,1);
		level_02_B.image_target_B.addAnimation("knuckles",2,1);
		level_02_B.image_target_B.update = function() {
			// Background sway
			level_02_B.image_target_B.x = level_02_B.image_background.x + 540;
			level_02_B.image_target_B.y = level_02_B.image_background.y + 330;
			// Animation
			if(level_02_hub.target_loop.value>=900 && level_02_hub.target_loop.value<1080) {	// 15 to 18 secs
				level_02_B.image_target_B.animation = "watch";
			}else if((level_02_hub.target_loop.value>=780 && level_02_hub.target_loop.value<900)	// 13 to 15 secs
					 || (level_02_hub.target_loop.value>=1680 && level_02_hub.target_loop.value<1800)	// 28 to 30 secs
					 || (level_02_hub.target_loop.value>=3360 && level_02_hub.target_loop.value<3480)) {	// 56 to 58 secs
				level_02_B.image_target_B.animation = "knuckles";
			}else {
				level_02_B.image_target_B.animation = "idle";
			}
		};
		
		// Target A shadow sprite
		level_02_B.image_shadow_A = new Sprite();
		level_02_B.image_shadow_A.width  = 48;
		level_02_B.image_shadow_A.height = 128;
		level_02_B.image_shadow_A.x_move = 0;
		level_02_B.image_shadow_A.y_move = 0;
		level_02_B.image_shadow_A.image = Textures.load
			("./Common/Textures/general-man-plain.png");
		
		// Target A shadow animation
		level_02_B.image_shadow_A.frameWidth  = 24;
		level_02_B.image_shadow_A.frameHeight = 64;
		level_02_B.image_shadow_A.frameCount  = 25;
		level_02_B.image_shadow_A.frameRate   = 0;
		level_02_B.image_shadow_A.addAnimations
			(["walk_LD", "walk_RD", "walk_LU", "walk_RU",
			 "stand_LD", "stand_RD", "stand_LU", "stand_RU"],
			 [5,5,5,5,1,1,1,1]);
		level_02_B.image_shadow_A.update = function() {
			// Background sway
			level_02_B.image_shadow_A.x = 
				level_02_B.image_background.x + level_02_B.image_shadow_A.x_move + 360;
			level_02_B.image_shadow_A.y = 
				level_02_B.image_background.y + level_02_B.image_shadow_A.y_move + 400;
			// Animation
			if((level_02_hub.target_loop.value>=0 && level_02_hub.target_loop.value<300)			// 0 to 5 secs
				|| (level_02_hub.target_loop.value>=1800 && level_02_hub.target_loop.value<2100)) {	// 30 to 35 secs
				level_02_B.image_shadow_A.animation = "walk_LU";
				level_02_B.image_shadow_A.frameRate = 2;
				level_02_B.image_shadow_A.x_move = level_02_hub.target_x;
				level_02_B.image_shadow_A.y_move = level_02_hub.target_y;
			}else if((level_02_hub.target_loop.value>=900 && level_02_hub.target_loop.value<1200)		// 15 to 20 secs
					 || (level_02_hub.target_loop.value>=2700 && level_02_hub.target_loop.value<3000)) {// 45 to 50 secs
				level_02_B.image_shadow_A.animation = "walk_RD";
				level_02_B.image_shadow_A.frameRate = 2;
				level_02_B.image_shadow_A.x_move = level_02_hub.target_x;
				level_02_B.image_shadow_A.y_move = level_02_hub.target_y;
			}else if((level_02_hub.target_loop.value>=300 && level_02_hub.target_loop.value<900)		// 5 to 15 secs
					 || (level_02_hub.target_loop.value>=2100 && level_02_hub.target_loop.value<2700)) {// 25 to 35 secs
				level_02_B.image_shadow_A.animation = "stand_LU";
				level_02_B.image_shadow_A.frameRate = 0;
				level_02_B.image_shadow_A.x_move = level_02_hub.target_x;
				level_02_B.image_shadow_A.y_move = level_02_hub.target_y;
			}else if((level_02_hub.target_loop.value>=1200 && level_02_hub.target_loop.value<1800)		// 20 to 30 secs
					 || (level_02_hub.target_loop.value>=3000 && level_02_hub.target_loop.value<3600)) {// 50 to 60 secs
				level_02_B.image_shadow_A.animation = "stand_RD";
				level_02_B.image_shadow_A.frameRate = 0;
				level_02_B.image_shadow_A.x_move = level_02_hub.target_x;
				level_02_B.image_shadow_A.y_move = level_02_hub.target_y;
			}
		};
		
		/***===   End of passive sprites  ===***/
		
		/***=================================***/
		/***         Active sprites          ***/
		/***=================================***/
		// Sprites to be available to input_manager

		// Button to return to the hub
		level_02_B.ret = new TextBox("<< return  ");
		level_02_B.ret.font = "Courier";
		level_02_B.ret.fontSize = 30;
		level_02_B.ret.color = "#FFFFFF";
		level_02_B.ret.x = 0;
		level_02_B.ret.y = 690;
		level_02_B.ret.mouseOver = false;
		level_02_B.ret.bgColor = "#000000";
		level_02_B.ret.update = function() {
			if(level_02_B.ret.mouseOver) {
				level_02_B.ret.color = "#484848";
			}else {
				level_02_B.ret.color = "#FFFFFF";
			}
		}
		level_02_B.ret.click = function() {
			changeRoom(level_02_hub);
		}
		
		// Button to initiate call target
		level_02_B.button_call = new TextBox("   <CALL PHONE>   ");
		level_02_B.button_call.font = "Courier";
		level_02_B.button_call.color = "Red";
		level_02_B.button_call.fontSize = 30;
		level_02_B.button_call.x = 375;
		level_02_B.button_call.y = 45;
		level_02_B.button_call.mouseOver = false;
		level_02_B.button_call.update = function() {
			if(level_02_B.button_call.mouseOver) {
				level_02_B.button_call.text = "<<< CALL PHONE >>>";
				level_02_B.button_call.color = "Lime";
			}else {
				level_02_B.button_call.text = "   <CALL PHONE>   ";
				level_02_B.button_call.color = "Red";
			}
		}
		level_02_B.button_call.click = function() {
			world.addChild(black_screen);
			level_02_B.startDialogue();
		}
		
		// Button to fire upon target
		level_02_B.button_fire = new TextBox("<< FIRE >>");
		level_02_B.button_fire.font = "Courier";
		level_02_B.button_fire.fontSize = 35;
		level_02_B.button_fire.color = "Black";
		level_02_B.button_fire.x = 435;
		level_02_B.button_fire.y = 345;
		level_02_B.button_fire.visible = false;
		level_02_B.button_fire.update = function() {
			if(level_02_B.button_fire.mouseOver) {
				level_02_B.button_fire.visible = true;
				red_screen.visible = true;
			}else {
				level_02_B.button_fire.visible = false;
				red_screen.visible = false;
			}
		}
		level_02_B.button_fire.click = function() {
			world.removeChild(red_screen);
			changeRoom(level_01_end);
		}
		

		world.addChild(level_02_B.image_background);
		world.addChild(level_02_B.image_ak47);
		world.addChild(level_02_B.image_target_B);
		world.addChild(level_02_B.image_shadow_A);
		world.addChild(red_screen);
		world.addChild(level_02_B.image_scope);
		world.addChild(level_02_B.ret);
		world.addChild(level_02_B.button_call);
		world.addChild(level_02_B.button_fire);
		
		// Active sprites at creation time
		active_sprites.push(level_02_B.ret);
		active_sprites.push(level_02_B.button_call);
		active_sprites.push(level_02_B.button_fire);
	}
	
	/***==============================***/
	/***     room.startDialogue()     ***/
	/***==============================***/
	// Starting dialogue clears room behind the screen
	level_02_B.startDialogue = function() {
		world.removeChild(level_02_B.ret);
		world.removeChild(level_02_B.button_call);
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
	level_02_B.endDialogue = function(ending) {
		world.removeChild(black_screen);
		
		world.addChild(level_02_B.ret);
		world.addChild(level_02_B.button_call);
		active_sprites.push(level_02_B.ret);
		active_sprites.push(level_02_B.button_call);
		active_sprites.push(level_02_B.button_fire);
		
		alert("This is the ending you chose: " + ending);
	}
	
	/***===============================***/
	/***        Clear this room        ***/
	/***===============================***/
	// Remove from the world, un-draw sprites, etc...
	level_02_B.clear = function() {
		world.removeChild(level_02_B.image_background);
		world.removeChild(level_02_B.image_ak47);
		world.removeChild(level_02_B.image_target_B);
		world.removeChild(level_02_B.image_shadow_A);
		world.removeChild(level_02_B.image_scope);
		world.removeChild(level_02_B.ret);
		world.removeChild(level_02_B.button_call);
		world.removeChild(level_02_B.button_fire);
		world.removeChild(red_screen);
		while(active_sprites.length > 0)
			active_sprites.pop();
	}