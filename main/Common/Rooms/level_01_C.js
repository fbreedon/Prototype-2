/***===============================***/
/***       Level 01: target C      ***/
/***===============================***/
var level_01_C = new Sprite();
	// Create this room
	level_01_C.create = function() {
		var sway_x = 0;
		var sway_y = 0;
		
		// This room's passive sprites
		level_01_C.image_background = new Sprite();
		level_01_C.image_background.width  = 1080;
		level_01_C.image_background.height = 720;
		level_01_C.image_background.x = 0;
		level_01_C.image_background.y = 0;
		level_01_C.image_background.image = Textures.load
			("./Common/Textures/Level 01/target c background.png");
		level_01_C.image_background.i = 0;
		level_01_C.image_background.update = function() {
			level_01_C.image_background.y = Math.sin(sway_x) * 20;
			sway_x += 0.009 * Math.random();
			level_01_C.image_background.x = Math.sin(sway_y) * 20;
			sway_y += 0.02 * Math.random();;
			if(sway_x >= 2*Math.PI) sway_x = 0;
			if(sway_y >= 2*Math.PI) sway_y = 0;
		}
			
		level_01_C.image_scope = new Sprite();
		level_01_C.image_scope.width  = 1080;
		level_01_C.image_scope.height = 720;
		level_01_C.image_scope.x = 0;
		level_01_C.image_scope.y = 0;
		level_01_C.image_scope.image = Textures.load
			("./Common/Textures/scope.png");
			
		// Target C Sprite
		level_01_C.image_target_C = new Sprite();
		level_01_C.image_target_C.width  = 24;
		level_01_C.image_target_C.height = 64;
		level_01_C.image_target_C.x_move = 0;
		level_01_C.image_target_C.y_move = 0;
		level_01_C.image_target_C.image = Textures.load
			("./Common/Textures/Level 01/target-C.png");
		// Target C Animation
		level_01_C.image_target_C.frameWidth  = 24;
		level_01_C.image_target_C.frameHeight = 64;
		level_01_C.image_target_C.frameCount  = 15;
		level_01_C.image_target_C.frameRate   = 0;
		level_01_C.image_target_C.addAnimations
			(["walk_front", "walk_back", "idle_front",
			 "idle_back", "phone_front", "phone_back"],
			  [5,5,1,1,1,1]);
		level_01_C.image_target_C.update = function() {
			// Background sway
			level_01_C.image_target_C.x = 
				level_01_C.image_background.x + level_01_C.image_target_C.x_move + 540;
			level_01_C.image_target_C.y = 
				level_01_C.image_background.y + level_01_C.image_target_C.y_move + 360;
			// Animations
			if((level_01_hub.target_loop.value>=0 && level_01_hub.target_loop.value<300)
				|| (level_01_hub.target_loop.value>=1350 && level_01_hub.target_loop.value<1650)
				|| (level_01_hub.target_loop.value>=1800 && level_01_hub.target_loop.value<2100)
				|| (level_01_hub.target_loop.value>=3150 && level_01_hub.target_loop.value<3450)) {
				level_01_C.image_target_C.animation = "walk_back";
				level_01_C.image_target_C.frameRate = 2;
				level_01_C.image_target_C.x_move = level_01_hub.target_x;
				level_01_C.image_target_C.y_move = level_01_hub.target_y;
			}else if((level_01_hub.target_loop.value>=450 && level_01_hub.target_loop.value<750)
					 || (level_01_hub.target_loop.value>=900 && level_01_hub.target_loop.value<1200)
					 || (level_01_hub.target_loop.value>=2250 && level_01_hub.target_loop.value<2550)
					 || (level_01_hub.target_loop.value>=2700 && level_01_hub.target_loop.value<3000)) {
				level_01_C.image_target_C.animation = "walk_front";
				level_01_C.image_target_C.frameRate = 2;
				level_01_C.image_target_C.x_move = level_01_hub.target_x;
				level_01_C.image_target_C.y_move = level_01_hub.target_y;
			}else if((level_01_hub.target_loop.value>=300 && level_01_hub.target_loop.value<450)
					 || (level_01_hub.target_loop.value>=1650 && level_01_hub.target_loop.value<1800)
					 || (level_01_hub.target_loop.value>=2100 && level_01_hub.target_loop.value<2250)
					 || (level_01_hub.target_loop.value>=3450 && level_01_hub.target_loop.value<3600)) {
				level_01_C.image_target_C.animation = "idle_back";
				level_01_C.image_target_C.frameRate = 0;
				level_01_C.image_target_C.x_move = level_01_hub.target_x;
				level_01_C.image_target_C.y_move = level_01_hub.target_y;
			}else if((level_01_hub.target_loop.value>=750 && level_01_hub.target_loop.value<900)
					 || (level_01_hub.target_loop.value>=1200 && level_01_hub.target_loop.value<1350)
					 || (level_01_hub.target_loop.value>=2550 && level_01_hub.target_loop.value<2700)
					 || (level_01_hub.target_loop.value>=3000 && level_01_hub.target_loop.value<3150)) {
				level_01_C.image_target_C.animation = "idle_front";
				level_01_C.image_target_C.frameRate = 0;
				level_01_C.image_target_C.x_move = level_01_hub.target_x;
				level_01_C.image_target_C.y_move = level_01_hub.target_y;
			}
		};
		
		// This room's active sprites
		level_01_C.ret = new TextBox("<< return  ");
		level_01_C.ret.font = "Courier";
		level_01_C.ret.fontSize = 30;
		level_01_C.ret.color = "#FFFFFF";
		level_01_C.ret.x = 0;
		level_01_C.ret.y = 690;
		level_01_C.ret.mouseOver = false;
		level_01_C.ret.bgColor = "#000000";
		level_01_C.ret.drawBG = true;
		level_01_C.ret.update = function() {
			if(level_01_C.ret.mouseOver) {
				level_01_C.ret.color = "#484848";
			}else {
				level_01_C.ret.color = "#FFFFFF";
			}
		}
		level_01_C.ret.click = function() {
			changeRoom(level_01_hub);
		}
		
		level_01_C.button_call = new TextBox("   <CALL PHONE>   ");
		level_01_C.button_call.font = "Courier";
		level_01_C.button_call.color = "Red";
		level_01_C.button_call.fontSize = 30;
		level_01_C.button_call.x = 375;
		level_01_C.button_call.y = 45;
		level_01_C.button_call.mouseOver = false;
		level_01_C.button_call.update = function() {
			if(level_01_C.button_call.mouseOver) {
				level_01_C.button_call.text = "<<< CALL PHONE >>>";
				level_01_C.button_call.color = "Lime";
			}else {
				level_01_C.button_call.text = "   <CALL PHONE>   ";
				level_01_C.button_call.color = "Red";
			}
		}
		level_01_C.button_call.click = function() {
			world.addChild(black_screen);
			var node = createNode("Hello?", "Go to index 1", 1, "Go to ending 1", -1, "Go to ending 2", -2);
			createNode("You clicked index 1", "Go to ending 3", -3, "Go to ending 4", -4);
			node.create();
		}
		
		level_01_C.button_fire = new TextBox("<< FIRE >>");
		level_01_C.button_fire.font = "Courier";
		level_01_C.button_fire.fontSize = 35;
		level_01_C.button_fire.color = "Black";
		level_01_C.button_fire.x = 435;
		level_01_C.button_fire.y = 345;
		level_01_C.button_fire.visible = false;
		level_01_C.button_fire.update = function() {
			if(level_01_C.button_fire.mouseOver) {
				level_01_C.button_fire.visible = true;
				red_screen.visible = true;
			}else {
				level_01_C.button_fire.visible = false;
				red_screen.visible = false;
			}
		}
		level_01_C.button_fire.click = function() {
			world.removeChild(red_screen);
			changeRoom(level_01_end);
		}
		
		// Visible sprites at creation time
		world.addChild(level_01_C.image_background);
		world.addChild(level_01_C.image_target_C);
		world.addChild(red_screen);
		world.addChild(level_01_C.image_scope);
		world.addChild(level_01_C.ret);
		world.addChild(level_01_C.button_call);
		world.addChild(level_01_C.button_fire);
		
		// Active sprites at creation time
		active_sprites.push(level_01_C.ret);
		active_sprites.push(level_01_C.button_call);
		active_sprites.push(level_01_C.button_fire);
	}
	
	// Start the dialogue
	level_01_C.startDialogue = function() {
		world.removeChild(level_01_C.ret);
		world.removeChild(level_01_C.button_call);
		while(active_sprites.length > 0)
			active_sprites.pop();
	}
	
	// End the dialogue
	level_01_C.endDialogue = function(ending) {
		world.removeChild(black_screen);
		
		world.addChild(level_01_C.ret);
		world.addChild(level_01_C.button_call);
		active_sprites.push(level_01_C.ret);
		active_sprites.push(level_01_C.button_call);
		active_sprites.push(level_01_C.button_fire);
		
		alert("This is the ending you chose: " + ending);
	}
	
	// Clear this room
	level_01_C.clear = function() {
		world.removeChild(level_01_C.image_background);
		world.removeChild(level_01_C.image_target_C);
		world.removeChild(level_01_C.image_scope);
		world.removeChild(level_01_C.ret);
		world.removeChild(level_01_C.button_call);
		world.removeChild(level_01_C.button_fire);
		world.removeChild(red_screen);
		while(active_sprites.length > 0)
			active_sprites.pop();
	}