/***===   Level 01: target A   ===***/
var level_01_B = new Sprite();
	// Create this room
	level_01_B.create = function() {
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
		
		// This room's active sprites
		level_01_B.ret = new TextBox("<< Return  ");
		level_01_B.ret.font = "Courier";
		level_01_B.ret.fontSize = 30;
		level_01_B.ret.color = "#FFFFFF";
		level_01_B.ret.x = 0;
		level_01_B.ret.y = 0;
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
		
		// Visible sprites at creation time
		world.addChild(level_01_B.image_background);
		world.addChild(level_01_B.image_scope);
		world.addChild(level_01_B.ret);
		
		// Active sprites at creation time
		active_sprites.push(level_01_B.ret);
	}
	
	// Clear this room
	level_01_B.clear = function() {
		world.removeChild(level_01_B.image_background);
		world.removeChild(level_01_B.image_scope);
		world.removeChild(level_01_B.ret);
		while(active_sprites.length > 0)
			active_sprites.pop();
	}