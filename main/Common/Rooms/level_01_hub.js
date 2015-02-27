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
		
		
		// This room's active sprites
		
		// Visible sprites at creation time
		world.addChild(level_01_hub.image_background);
		world.addChild(level_01_hub.image_sniper);
		
		// Active sprites at creation time
	}
	
	// Clear this room
	level_01_hub.clear = function() {
		
	}