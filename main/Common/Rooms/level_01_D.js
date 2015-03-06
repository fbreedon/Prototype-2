/***===============================***/
/***       Level 01: target D      ***/
/***===============================***/
var level_01_D = new Sprite();
	// Is this room's BGM playing?
	level_01_D.bgm = false;

	// Create this room
	level_01_D.create = function() {
		
		var sway_x = 0;
		var sway_y = 0;
		
		// This room's passive sprites
		level_01_D.image_background = new Sprite();
		level_01_D.image_background.width  = 1080;
		level_01_D.image_background.height = 720;
		level_01_D.image_background.x = 0;
		level_01_D.image_background.y = 0;
		level_01_D.image_background.image = Textures.load
			("./Common/Textures/Level 01/target d background.png");
		level_01_D.image_background.i = 0;
		level_01_D.image_background.update = function() {
			level_01_D.image_background.y = Math.sin(sway_x) * 20;
			sway_x += 0.009 * Math.random();
			level_01_D.image_background.x = Math.sin(sway_y) * 20;
			sway_y += 0.02 * Math.random();;
			if(sway_x >= 2*Math.PI) sway_x = 0;
			if(sway_y >= 2*Math.PI) sway_y = 0;
		}
			
		level_01_D.image_scope = new Sprite();
		level_01_D.image_scope.width  = 1080;
		level_01_D.image_scope.height = 720;
		level_01_D.image_scope.x = 0;
		level_01_D.image_scope.y = 0;
		level_01_D.image_scope.image = Textures.load
			("./Common/Textures/scope.png");
			
		// Target D Sprite
		level_01_D.image_target_D = new Sprite();
		level_01_D.image_target_D.width  = 32;
		level_01_D.image_target_D.height = 96;
		level_01_D.image_target_D.x = 0;
		level_01_D.image_target_D.y = 0;
		level_01_D.image_target_D.image = Textures.load
			("./Common/Textures/Level 01/target-D.png");
		// Target D Animation
		level_01_D.image_target_D.frameWidth  = 24;
		level_01_D.image_target_D.frameHeight = 64;
		level_01_D.image_target_D.frameCount  = 2;
		level_01_D.image_target_D.frameRate   = 2;
		level_01_D.image_target_D.addAnimation("idle",0,3); 
		level_01_D.image_target_D.update = function() {
			// Background sway
			level_01_D.image_target_D.x = level_01_D.image_background.x + 520;
			level_01_D.image_target_D.y = level_01_D.image_background.y + 360;
			// Animations
			level_01_D.image_target_D.animation = "idle";
		};
		
		// This room's active sprites
		level_01_D.ret = new TextBox("<< return  ");
		level_01_D.ret.font = "Courier";
		level_01_D.ret.fontSize = 30;
		level_01_D.ret.color = "#FFFFFF";
		level_01_D.ret.x = 0;
		level_01_D.ret.y = 690;
		level_01_D.ret.mouseOver = false;
		level_01_D.ret.bgColor = "#000000";
		level_01_D.ret.drawBG = true;
		level_01_D.ret.update = function() {
			if(level_01_D.ret.mouseOver) {
				level_01_D.ret.color = "#484848";
			}else {
				level_01_D.ret.color = "#FFFFFF";
			}
		}
		level_01_D.ret.click = function() {
			level_01_D.stopAudio();
			level_01_hub.sound_background.volume = 0.5;
			changeRoom(level_01_hub);
		}
		
		level_01_D.button_call = new TextBox("    <CALL PHONE>   ");
		level_01_D.button_call.font = "Courier";
		level_01_D.button_call.color = "Red";
		level_01_D.button_call.fontSize = 30;
		level_01_D.button_call.x = 375;
		level_01_D.button_call.y = 45;
		level_01_D.button_call.mouseOver = false;
		level_01_D.button_call.update = function() {
			if(level_01_D.button_call.mouseOver) {
				level_01_D.button_call.text = "<<< CALL PHONE >>>";
				level_01_D.button_call.color = "Lime";
			}else {
				level_01_D.button_call.text = "   <CALL PHONE>";
				level_01_D.button_call.color = "Red";
			}
		}
		level_01_D.button_call.click = function() {
			world.addChild(black_screen);
			level_01_D.startDialogue();
		}
		
		level_01_D.button_fire = new TextBox("<< FIRE >>");
		level_01_D.button_fire.font = "Courier";
		level_01_D.button_fire.fontSize = 35;
		level_01_D.button_fire.color = "Black";
		level_01_D.button_fire.x = 435;
		level_01_D.button_fire.y = 345;
		level_01_D.button_fire.visible = false;
		level_01_D.button_fire.update = function() {
			if(level_01_D.button_fire.mouseOver) {
				level_01_D.button_fire.visible = true;
				red_screen.visible = true;
			}else {
				level_01_D.button_fire.visible = false;
				red_screen.visible = false;
			}
		}
		level_01_D.button_fire.click = function() {
			level_01_D.stopAudio();
			world.removeChild(red_screen);
			changeRoom(level_01_end);
		}
		
		// Visible sprites at creation time
		world.addChild(level_01_D.image_background);
		world.addChild(level_01_D.image_target_D);
		world.addChild(red_screen);
		world.addChild(level_01_D.image_scope);
		world.addChild(level_01_D.ret);
		world.addChild(level_01_D.button_call);
		world.addChild(level_01_D.button_fire);
		
		// Active sprites at creation time
		active_sprites.push(level_01_D.ret);
		active_sprites.push(level_01_D.button_call);
		active_sprites.push(level_01_D.button_fire);
		
		if(!level_01_D.bgm)
			level_01_D.playAudio();
	}
	
	// Start the dialogue
	level_01_D.startDialogue = function() {
		world.removeChild(level_01_D.ret);
		world.removeChild(level_01_D.button_call);
		while(active_sprites.length > 0)
			active_sprites.pop();
		
		var node = createNode("Hello?", "Go to index 1", 1, "Go to ending 1", -1, "Go to ending 2", -2);
		createNode("You clicked index 1", "Go to ending 3", -3, "Go to ending 4", -4);
		node.create();
	}
	
	// End the dialogue
	level_01_D.endDialogue = function(ending) {
		world.removeChild(black_screen);
		
		world.addChild(level_01_D.ret);
		world.addChild(level_01_D.button_call);
		active_sprites.push(level_01_D.ret);
		active_sprites.push(level_01_D.button_call);
		active_sprites.push(level_01_D.button_fire);
		
		alert("This is the ending you chose: " + ending);
	}
	
	/***===================================***/
	/***         room.playAudio()          ***/
	/***===================================***/
	// Play special audio for this room
	level_01_D.playAudio = function() {
 		// Audio objects for this room
 		level_01_D.sound_background = new Audio("./Common/Sounds/scope_ambiance01.wav");
		level_01_D.sound_background.volume = 0.5;
		
		
		// Play and loop room ambiance
		level_01_D.sound_background.addEventListener('ended', function() {
			this.currentTime = 0;
			this.play();
		});
		level_01_D.sound_background.play();
		
		level_01_D.bgm = true;
	}
	
	/***=================================***/
	/***         room.stopAudio()        ***/
	/***=================================***/
	// Stop all audio emitting from this room
	level_01_D.stopAudio = function() {
		// Stop city ambiance
		level_01_D.sound_background.pause();
		level_01_D.sound_background.currentTime = 0;
		level_01_D.sound_background.removeEventListener('ended', function() {
			this.pause();
			this.currentTime = 0;
		});
		
		level_01_D.bgm = false;
	}
	
	// Clear this room
	level_01_D.clear = function() {
		world.removeChild(level_01_D.image_background);
		world.removeChild(level_01_D.image_target_D);
		world.removeChild(level_01_D.image_scope);
		world.removeChild(level_01_D.ret);
		world.removeChild(level_01_D.button_call);
		world.removeChild(level_01_D.button_fire);
		world.removeChild(level_01_D.red_screen);
		while(active_sprites.length > 0)
			active_sprites.pop();
	}