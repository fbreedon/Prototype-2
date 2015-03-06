/***===============================***/
/***       Level 01: target B      ***/
/***===============================***/
var level_01_B = new Sprite();
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
			if((level_01_hub.target_loop.value>=180 && level_01_hub.target_loop.value<360)
				|| (level_01_hub.target_loop.value>=1980 && level_01_hub.target_loop.value<2160)) {
				info_count++;
				if(level_01_hub.target2_has_seen && info_count == 120){
						level_01_hub.seen_info = "some info";
						level_01_hub.target2_has_seen = true;
				}
			}else if((level_01_hub.target_loop.value>=360 && level_01_hub.target_loop.value<540)
				|| (level_01_hub.target_loop.value>=2160 && level_01_hub.target_loop.value<2340)) {
				level_01_B.image_target_B.animation = "look_around";
				level_01_B.image_target_B.frameRate = 0;
				info_count++;
				if(level_01_hub.target2_has_seen && info_count == 120){
						level_01_hub.target2_seen_info = "some info";
						level_01_hub.target2_has_seen = true;
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
			var node = createNode("Hello?", "Go to index 1", 1, "Go to ending 1", -1, "Go to ending 2", -2);
			createNode("You clicked index 1", "Go to ending 3", -3, "Go to ending 4", -4);
			node.create();
		}
		
		level_01_B.button_fire = new TextBox("<< FIRE >>");
		level_01_B.button_fire.font = "Courier";
		level_01_B.button_fire.fontSize = 35;
		level_01_B.button_fire.color = "Black";
		level_01_B.button_fire.x = 435;
		level_01_B.button_fire.y = 345;
		level_01_B.button_fire.visible = false;
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
			world.removeChild(red_screen);
			changeRoom(level_01_end);
		}
		
		// Visible sprites at creation time
		world.addChild(level_01_B.image_background);
		world.addChild(level_01_B.image_car);
		world.addChild(level_01_B.image_target_B);
		world.addChild(red_screen);
		world.addChild(level_01_B.image_scope);
		world.addChild(level_01_B.ret);
		world.addChild(level_01_B.button_call);
		world.addChild(level_01_B.button_fire);
		
		// Active sprites at creation time
		active_sprites.push(level_01_B.ret);
		active_sprites.push(level_01_B.button_call);
		active_sprites.push(level_01_B.button_fire);
	}
	
	// Start the dialogue
	level_01_B.startDialogue = function() {
		world.removeChild(level_01_B.ret);
		world.removeChild(level_01_B.button_call);
		while(active_sprites.length > 0)
			active_sprites.pop();
	}
	
	// End the dialogue
	level_01_B.endDialogue = function(ending) {
		world.removeChild(black_screen);
		
		world.addChild(level_01_B.ret);
		world.addChild(level_01_B.button_call);
		active_sprites.push(level_01_B.ret);
		active_sprites.push(level_01_B.button_call);
		active_sprites.push(level_01_B.button_fire);
		
		alert("This is the ending you chose: " + ending);
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
		world.removeChild(red_screen);
		while(active_sprites.length > 0)
			active_sprites.pop();
	}