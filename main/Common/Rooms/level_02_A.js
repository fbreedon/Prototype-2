/***===============================***/
/***       Level 01: target A      ***/
/***===============================***/
var level_02_A = new Sprite();

	/***==================================***/
	/***          room.create()           ***/
	/***==================================***/
	// What to do at creation time
	level_02_A.create = function() {
		var sway_x = 0;
		var sway_y = 0;
		
		/***=================================***/
		/***         Passive sprites         ***/
		/***=================================***/
		// Sprites to be drawn, but without interactivity
		level_02_A.image_background = new Sprite();
		level_02_A.image_background.width  = 1080;
		level_02_A.image_background.height = 720;
		level_02_A.image_background.x = 0;
		level_02_A.image_background.y = 0;
		level_02_A.image_background.image = Textures.load
			("./Common/Textures/Level 02/target A background.png");
		level_02_A.image_background.i = 0;
		level_02_A.image_background.update = function() {
			level_02_A.image_background.y = Math.sin(sway_x) * 20;
			sway_x += 0.009 * Math.random();
			level_02_A.image_background.x = Math.sin(sway_y) * 20;
			sway_y += 0.02 * Math.random();;
			if(sway_x >= 2*Math.PI) sway_x = 0;
			if(sway_y >= 2*Math.PI) sway_y = 0;
		}
			
		level_02_A.image_scope = new Sprite();
		level_02_A.image_scope.width  = 1080;
		level_02_A.image_scope.height = 720;
		level_02_A.image_scope.x = 0;
		level_02_A.image_scope.y = 0;
		level_02_A.image_scope.image = Textures.load
			("./Common/Textures/scope.png");
		
		/***===   End of passive sprites  ===***/
		
		/***=================================***/
		/***         Active sprites          ***/
		/***=================================***/
		// Sprites to be available to input_manager

		// Button to return to the hub
		level_02_A.ret = new TextBox("<< return  ");
		level_02_A.ret.font = "Courier";
		level_02_A.ret.fontSize = 30;
		level_02_A.ret.color = "#FFFFFF";
		level_02_A.ret.x = 0;
		level_02_A.ret.y = 690;
		level_02_A.ret.mouseOver = false;
		level_02_A.ret.bgColor = "#000000";
		level_02_A.ret.update = function() {
			if(level_02_A.ret.mouseOver) {
				level_02_A.ret.color = "#484848";
			}else {
				level_02_A.ret.color = "#FFFFFF";
			}
		}
		level_02_A.ret.click = function() {
			changeRoom(level_02_hub);
		}
		
		// Button to initiate call target
		level_02_A.button_call = new TextBox("   <CALL PHONE>   ");
		level_02_A.button_call.font = "Courier";
		level_02_A.button_call.color = "Red";
		level_02_A.button_call.fontSize = 30;
		level_02_A.button_call.x = 375;
		level_02_A.button_call.y = 45;
		level_02_A.button_call.mouseOver = false;
		level_02_A.button_call.update = function() {
			if(level_02_A.button_call.mouseOver) {
				level_02_A.button_call.text = "<<< CALL PHONE >>>";
				level_02_A.button_call.color = "Lime";
			}else {
				level_02_A.button_call.text = "   <CALL PHONE>   ";
				level_02_A.button_call.color = "Red";
			}
		}
		level_02_A.button_call.click = function() {
			world.addChild(black_screen);
			level_02_A.startDialogue();
		}
		
		// Button to fire upon target
		level_02_A.button_fire = new TextBox("<< FIRE >>");
		level_02_A.button_fire.font = "Courier";
		level_02_A.button_fire.fontSize = 35;
		level_02_A.button_fire.color = "Black";
		level_02_A.button_fire.x = 435;
		level_02_A.button_fire.y = 345;
		level_02_A.button_fire.visible = false;
		level_02_A.button_fire.update = function() {
			if(level_02_A.button_fire.mouseOver) {
				level_02_A.button_fire.visible = true;
				red_screen.visible = true;
			}else {
				level_02_A.button_fire.visible = false;
				red_screen.visible = false;
			}
		}
		level_02_A.button_fire.click = function() {
			world.removeChild(red_screen);
			changeRoom(level_01_end);
		}
		

		world.addChild(level_02_A.image_background);
		world.addChild(red_screen);
		world.addChild(level_02_A.image_scope);
		world.addChild(level_02_A.ret);
		world.addChild(level_02_A.button_call);
		world.addChild(level_02_A.button_fire);
		
		// Active sprites at creation time
		active_sprites.push(level_02_A.ret);
		active_sprites.push(level_02_A.button_call);
		active_sprites.push(level_02_A.button_fire);
	}
	
	/***==============================***/
	/***     room.startDialogue()     ***/
	/***==============================***/
	// Starting dialogue clears room behind the screen
	level_02_A.startDialogue = function() {
		world.removeChild(level_02_A.ret);
		world.removeChild(level_02_A.button_call);
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
	level_02_A.endDialogue = function(ending) {
		world.removeChild(black_screen);
		
		world.addChild(level_02_A.ret);
		world.addChild(level_02_A.button_call);
		active_sprites.push(level_02_A.ret);
		active_sprites.push(level_02_A.button_call);
		active_sprites.push(level_02_A.button_fire);
		
		alert("This is the ending you chose: " + ending);
	}
	
	/***===============================***/
	/***        Clear this room        ***/
	/***===============================***/
	// Remove from the world, un-draw sprites, etc...
	level_02_A.clear = function() {
		world.removeChild(level_02_A.image_background);
		world.removeChild(level_02_A.image_scope);
		world.removeChild(level_02_A.ret);
		world.removeChild(level_02_A.button_call);
		world.removeChild(level_02_A.button_fire);
		world.removeChild(red_screen);
		while(active_sprites.length > 0)
			active_sprites.pop();
	}