/***===   Level 01: target A   ===***/
var level_01_A = new Sprite();
	// Create this room
	level_01_A.create = function() {
		var sway_x = 0;
		var sway_y = 0;
		
		// This room's passive sprites
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
			}else if(level_01_hub.target_loop.value>=780 && level_01_hub.target_loop.value<810) {
				level_01_A.image_target_A.animation = "phone_away";
				level_01_A.image_target_A.frameRate = 0;
			}else {
				level_01_A.image_target_A.animation = "idle";
				level_01_A.image_target_A.frameRate = 0;
			}
		};
		
		// This room's active sprites
		level_01_A.ret = new TextBox("<< return  ");
		level_01_A.ret.font = "Courier";
		level_01_A.ret.fontSize = 30;
		level_01_A.ret.color = "#FFFFFF";
		level_01_A.ret.x = 0;
		level_01_A.ret.y = 0;
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
			changeRoom(level_01_hub);
		}
		
		level_01_A.button_call = new TextBox("  < call phone >  ");
		level_01_A.button_call.font = "Courier";
		level_01_A.button_call.color = "Red";
		level_01_A.button_call.fontSize = 30;
		level_01_A.button_call.x = 375;
		level_01_A.button_call.y = 650;
		level_01_A.button_call.mouseOver = false;
		level_01_A.button_call.update = function() {
			if(level_01_A.button_call.mouseOver) {
				level_01_A.button_call.text = "<<< call phone >>>";
				level_01_A.button_call.color = "Lime";
			}else {
				level_01_A.button_call.text = "  < call phone >  ";
				level_01_A.button_call.color = "Red";
			}
		}
		level_01_A.button_call.click = function() {
			world.addChild(black_screen);
			var node = createNode("Hello?", "Go to index 1", 1, "Go to ending 1", -1, "Go to ending 2", -2);
			createNode("You clicked index 1", "Go to ending 3", -3, "Go to ending 4", -4);
			node.create();
		}
		
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
			world.removeChild(red_screen);
			changeRoom(level_01_end);
		}
		
		// Visible sprites at creation time
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
	}
	
	// Start the dialogue
	level_01_A.startDialogue = function() {
		world.removeChild(level_01_A.ret);
		world.removeChild(level_01_A.button_call);
		while(active_sprites.length > 0)
			active_sprites.pop();
	}
	
	// End the dialogue
	level_01_A.endDialogue = function(ending) {
		world.removeChild(black_screen);
		
		world.addChild(level_01_A.ret);
		world.addChild(level_01_A.button_call);
		active_sprites.push(level_01_A.ret);
		active_sprites.push(level_01_A.button_call);
		active_sprites.push(level_01_A.button_fire);
		
		alert("This is the ending you chose: " + ending);
	}
	
	// Clear this room
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