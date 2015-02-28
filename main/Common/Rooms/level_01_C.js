/***===   Level 01: target A   ===***/
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
		
		// This room's active sprites
		level_01_C.ret = new TextBox("<< Return  ");
		level_01_C.ret.font = "Courier";
		level_01_C.ret.fontSize = 30;
		level_01_C.ret.color = "#FFFFFF";
		level_01_C.ret.x = 0;
		level_01_C.ret.y = 0;
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
		
		// Visible sprites at creation time
		world.addChild(level_01_C.image_background);
		world.addChild(level_01_C.image_scope);
		world.addChild(level_01_C.ret);
		
		// Active sprites at creation time
		active_sprites.push(level_01_C.ret);
	}
	
	// Clear this room
	level_01_C.clear = function() {
		world.removeChild(level_01_C.image_background);
		world.removeChild(level_01_C.image_scope);
		world.removeChild(level_01_C.ret);
		while(active_sprites.length > 0)
			active_sprites.pop();
	}