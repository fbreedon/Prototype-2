/***===   Level 01: "Shadowman"   ===***/
var level_01_hub = new Sprite();
	// Create this room
	level_01_hub.create = function() {
		// This room's passive sprites
		level_01_hub.image_background = new Sprite();
		level_01_hub.image_background.width  = 1080;
		level_01_hub.image_background.height = 720;
		level_01_hub.image_background.x = 0;
		level_01_hub.image_background.y = 0;
		level_01_hub.image_background.image = Textures.load
			("./Common/Textures/Level 01/hub background.png");
			
		level_01_hub.image_sniper = new Sprite();
		level_01_hub.image_sniper.width  = 1080;
		level_01_hub.image_sniper.height = 720;
		level_01_hub.image_sniper.x = 0;
		level_01_hub.image_sniper.y = 0;
		level_01_hub.image_sniper.image = Textures.load
			("./Common/Textures/sniper.png");
			
		level_01_hub.image_comment = new TextBox("\"my notes\"");
		level_01_hub.image_comment.font = "Courier";
		level_01_hub.image_comment.fontSize = 30;
		level_01_hub.image_comment.color = "#FFFFFF";
		level_01_hub.image_comment.x = 800;
		level_01_hub.image_comment.y = 680;
		level_01_hub.image_comment.visible = false;
		
		// This room's active sprites
		level_01_hub.button_notes = new Sprite();
		level_01_hub.button_notes.width  = 446;
		level_01_hub.button_notes.height = 182;
		level_01_hub.button_notes.x = 50;
		level_01_hub.button_notes.y = 540;
		level_01_hub.button_notes.mouseOver = false;
		level_01_hub.button_notes.update = function() {
			if(level_01_hub.button_notes.mouseOver) {
				level_01_hub.button_notes.image = Textures.load
					("./Common/Textures/notes over.gif");
				level_01_hub.image_comment.visible = true;
			}else {
				level_01_hub.button_notes.image = Textures.load
					("./Common/Textures/notes up.png");
				level_01_hub.image_comment.visible = false;
			}
		}
		
		// Visible sprites at creation time
		world.addChild(level_01_hub.image_background);
		world.addChild(level_01_hub.image_sniper);
		world.addChild(level_01_hub.image_comment);
		world.addChild(level_01_hub.button_notes);
		
		// Active sprites at creation time
		active_sprites.push(level_01_hub.button_notes);
	}
	
	// Clear this room
	level_01_hub.clear = function() {
		
	}